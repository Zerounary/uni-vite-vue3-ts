import { defineConfig, PluginOption } from "vite";
import { resolve } from "path";
import uni from "@dcloudio/vite-plugin-uni";
import WindiCSS from "vite-plugin-windicss";

import MiniProgramTailwind from "@dcasia/mini-program-tailwind-webpack-plugin/rollup";

let { UNI_UTS_PLATFORM } = process.env;

let plugins = [] as PluginOption[];

plugins.push(WindiCSS());

if (UNI_UTS_PLATFORM == "mp-weixin") {
  plugins.push(MiniProgramTailwind());
}

plugins.push(uni());


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "~": resolve(__dirname, "./"),
    },
  },
  plugins,
});
