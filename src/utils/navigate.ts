export const navigateMixinMethods = {

  /**
   * 跳转到至指定页面
   * @param {*} opt redirectTo 参数
   */
  $goto (opt: UniNamespace.RedirectToOptions, directTo = false) {
    const pages = getCurrentPages()
    if (pages.length === 0 || pages.length >= 9) { // 避免页面栈满
      uni.redirectTo(opt)
      return
    }
    if (directTo) {
      uni.navigateTo(opt)
    }
    const currentPath = pages.pop()?.route || ''
    if (`/${currentPath}` !== opt.url) {
      uni.redirectTo(opt)
    }
  },
}
