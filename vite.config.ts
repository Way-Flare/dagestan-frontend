import path from "path"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import EnvironmentPlugin from "vite-plugin-environment"

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const mockOn = process.env.MOCK

  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      mockOn
        ? EnvironmentPlugin({
            MOCK: process.env.MOCK,
          })
        : EnvironmentPlugin({
            MOCK: "false",
          }),
    ],
    server: {
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
  })
}
