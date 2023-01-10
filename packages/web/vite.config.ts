import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePages from "vite-plugin-pages";
import vueSvg from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    vueSvg(),
    // https://github.com/hannoeru/vite-plugin-pages#configuration
    vitePages({
      dirs: "src/modules/**/pages",
    }),
  ],
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      "@": path.resolve(__dirname, "./src"),
      "@core": path.resolve(__dirname, "./src/modules/core"),
    },
  },
});
