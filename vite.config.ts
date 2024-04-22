import path from "path"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import EnvironmentPlugin from "vite-plugin-environment"
import { VitePWA } from "vite-plugin-pwa"

const pwa = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "wayflare_pwa",
    short_name: "wayflare",
    start_url: "/",
    display: "standalone",
    theme_color: "#ffff",
    icons: [
      {
        src: "img/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "img/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
})

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const mockOn = process.env.MOCK
  console.log(mode)

  return defineConfig({
    plugins: [
      react(),
      pwa,
      tsconfigPaths(),
      EnvironmentPlugin({
        MOCK: mockOn ? process.env.MOCK : "false",
        API_HOST:
          mode === "development"
            ? process.env.VITE_API_DEV_HOST
            : process.env.VITE_API_HOST,
      }),
    ],

    server: {
      proxy: {
        "/v1": {
          target: `${process.env.VITE_API_HOST}/`,
          changeOrigin: true,
          secure: false,
          ws: true,
          configure: (proxy, _options) => {
            proxy.on("error", (err, _req, _res) => {
              console.log("proxy error", err)
            })
            proxy.on("proxyReq", (proxyReq, req, _res) => {
              console.log("Sending Request to the Target:", req.method, req.url)
            })
            proxy.on("proxyRes", (proxyRes, req, _res) => {
              console.log(
                "Received Response from the Target:",
                proxyRes.statusCode,
                req.url,
              )
            })
          },
        },
      },
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 3001,
    },
    resolve: {
      alias: {
        "@app": path.resolve("src/app"),
        "@pages": path.resolve("src/pages"),
        "@widgets": path.resolve("src/widgets"),
        "@features": path.resolve("src/features"),
        "@entities": path.resolve("src/entities"),
        "@shared": path.resolve("src/shared"),
      },
    },
  })
}
