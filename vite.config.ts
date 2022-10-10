import { defineConfig } from "vite";
import {resolve} from "path";
import uni from "@dcloudio/vite-plugin-uni";
import WindiCSS from "vite-plugin-windicss";
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
  },
  plugins: [WindiCSS(), MiniProgramTailwind(), uni()],
});
