import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
  build: { outDir: "docs", emptyOutDir: false, target: "es2022", chunkSizeWarningLimit: 5000 },
});
