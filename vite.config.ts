import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import sass from "sass";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@data-assets": resolve(__dirname, "src/data-assets"),
      "@enums": resolve(__dirname, "src/models/enums"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@interfaces": resolve(__dirname, "src/models/interfaces"),
      "@layout": resolve(__dirname, "src/layout"),
      "@context": resolve(__dirname, "src/context"),
    },
  },
  build: {
    outDir: "dist",
  },
  server: {
    // middleware: [
    //   {
    //     historyFallback: true,
    //   },
    // ],
  },
});
