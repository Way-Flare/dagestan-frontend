import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
  },
})
