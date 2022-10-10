import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  preflight: false,
  prefixer: false,
  extract: {
    // 忽略部分文件夹
    exclude: ["node_modules", ".git", "dist"],
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false,
  },
});
