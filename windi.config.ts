import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
  prefixer: false,
  theme: {
    extend: {
      colors: {
        'main-1': '#608C3D', // 主色调
        'main-2': '#6AA839', // 辅色
        'aux-1': '#19BF51', // 图标
        'aux-2': '#E564D9', // 图标
        'aux-3': '#F39701', // 图标
        'aux-4': '#FCE9C9', // 表单
        'aux-5': '#FF6F00', // 标签
        'aux-6': '#6AA839', // 标签
        'aux-7': '#008EFF', // 标签
        'aux-8': '#F22E32', // 标签
        'aux-9': '#B04095', // 标签
        'word-1': '#303133', // 主要文字
        'word-2': '#8A8A8A', // 普通文字
        'word-3': '#ADADAD', // 辅助文字
        'other-1': '#F0F0F0', // 边界线条
        'other-2': '#B7B7B7', // 箭头
        'other-3': '#F7F7F7', // 背景
      }
    }
  },
  extract: {
    // 忽略部分文件夹
    exclude: ['node_modules', '.git', 'dist'],
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false,
  },
})
