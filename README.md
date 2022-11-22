# Uni 速开项目

Uniapp + vue3 + vite + TS + pinia + vant + windiCSS + easymock

[uniapp - 官方模板](https://github.com/dcloudio/uni-preset-vue)
[uniapp - 模板文档](https://uniapp.dcloud.net.cn/quickstart-cli.html)
[Vue3](https://cn.vuejs.org/guide/introduction.html)
[Vite - 文档](https://cn.vitejs.dev/guide/)
[Typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
[Pinia - Vuex的替代](https://pinia.vuejs.org/introduction.html)
[Vant](https://vant-contrib.gitee.io/vant/#/zh-CN)
[WindiCSS](https://cn.windicss.org/utilities/general/colors.html)
[easymock - mock数据](https://github.com/Elity/EasyMock-VSCode.git)
[Mockjs](http://mockjs.com/examples.html)

多平台条件编译
vue3

启动 H5 项目
```shell
npm run dev:h5
```

启动 Android 项目
```shell
npm run dev:app-android
```

启动 微信小程序 项目
```shell
npm run dev:mp-weixin
```
# 使用 Iconfont 

登录 [iconfont](https://www.iconfont.cn/) 选择图标后，下载至本地。 得到的是一个压缩包，将里面的 `iconfont.css` 和  `iconfont.ttf` 替换到 `src/static` 目录下。

页面中类似使用如下方式引用
```html
    <view class="iconfont icon-bofang_huaban text-red-500"></view>
```