export const SHARE_MAP_NAME = 'SHARE_MAP'

/**
 * 获取全局页面数据分享Map
 * @returns shareMap
 */
export const getShareMap = () => {
  try {
    return uni.getStorageSync(SHARE_MAP_NAME)
  } catch (e) {
    uni.setStorageSync(SHARE_MAP_NAME, {})
  }
  return uni.getStorageSync(SHARE_MAP_NAME)
}

/**
 * 获取指定页面的分享数据
 * @param {string} path 页面路径path，如：/pages/index/index
 * @returns any 当前页面缓存的分享数据
 */
export const getShareData = (path: string) => {
  const shareMap = getShareMap()
  let data = shareMap[path]
  // const area = uni.getStorageSync('AREA_NAME')
  data = {
    // area,
    ...data,
  }
  let result = data
  if (typeof data === 'object') {
    result = JSON.stringify(data)
  }
  return result
}

/**
 * 全局分享mixin
 */
export const shareMixinRoot = {
  /**
   * 转发给朋友按钮事件
   * @returns null
   */
  onShareAppMessage() {
    const pages = getCurrentPages()
    let currentPath = pages.pop()?.route || ''
    const data = getShareData(currentPath)
    currentPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`
    console.log('onShareAppMessage..')
    return {
      path: `/pages/loading/index?ch=py&path=${currentPath}&data=${data}`,
    }
  },
  /**
   * 分享到朋友圈按钮事件
   * @returns null
   */
  onShareTimeline() {
    const pages = getCurrentPages()
    let currentPath = pages.pop()?.route || ''
    const data = getShareData(currentPath)
    currentPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`
    console.log('onShareTimeline..')
    return {
      query: `ch=pyq&path=${currentPath}&data=${data}`,
    }
  },
}

export const shareMixinMethods = {
  /**
   * 为当前页面设置分享数据，不追加每次全量更新
   * @param {any} data 当前页面分享的数据
   */
  _setShareData(data: any) {
    const pages = getCurrentPages()
    const currentPath = pages.pop()?.route || ''
    let shareMap = getShareMap()
    shareMap = {
      ...shareMap,
      [currentPath]: data,
    }
    uni.setStorageSync(SHARE_MAP_NAME, shareMap)
  },
  /**
   * 页面加载时，检查分享跳转
   */
  _checkShare() {
    const { query } = uni.getLaunchOptionsSync()
    if (query.ch) {
      if (query.ch === 'pyq') {
        const pages = getCurrentPages()
        const currentPath = pages.pop()?.route || ''
        uni.redirectTo({
          url: `/pages/loading/index?ch=pyq&path=${currentPath}&data=${query.data}`,
        })
      }
    }
  },
}
