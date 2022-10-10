import { defineConfig } from "vite";
import {resolve} from "path";
import uni from "@dcloudio/vite-plugin-uni";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
  },
  plugins: [WindiCSS(), uni()],
});
