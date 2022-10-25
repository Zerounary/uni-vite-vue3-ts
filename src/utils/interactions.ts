// uni.showToast
// uni.hideToast
// uni.showLoading
// uni.hideLoading
// uni.showModal
// uni.showActionSheet

/**
 * 显示消息提示窗
 * 仅当在设置了 duration 为 0 时才需要手动调用 `hideToast()` 来关闭 toast
 * @param { string } title 提示文字
 * @param { 'success' | 'error' | 'loading' | 'none' } icon 提示图标
 * @param { number } duration 持续时间
 * @param { boolean } mask 是否显示遮罩层
 * @param { string } image 自定义图标的本地路径
 */
export const showToast = (
  title: string = '',
  icon: 'success' | 'error' | 'loading' | 'none' = 'none',
  duration: number = 1500,
  mask: boolean = true,
  image: string = ''
) =>
  new Promise((resolve, reject) => {
    uni.showToast({
      title,
      icon, // 'success' | 'error' | 'loading' | 'none'
      image,
      duration,
      mask,
      success: () => {
        setTimeout(resolve, duration)
      },
      fail: () => {
        reject()
      },
    })
  })

/**
 * 显示加载中状态
 * @param { string } title 加载中标题
 * @param { boolean } mask 是否显示遮罩层
 */
export const showLoading = (title = '加载中', mask = true) =>
  new Promise((resolve, reject) => {
    uni.showLoading({
      title,
      mask,
      success: () => {
        resolve(null)
      },
      fail: () => {
        reject()
      },
    })
  })

/**
 * 关闭加载中状态
 */
export const { hideLoading } = uni

/**
 * 显示模态窗，比如 警告，确认
 * @param { string } title 标题
 * @param { string } content 内容
 * @param { boolean } showCancel 是否显示取消按钮
 * @param { string } cancelText 取消按钮文字
 * @param { string } confirmText 确认按钮文字
 */
export const showModal = (
  title = '',
  content = '',
  showCancel = true,
  cancelText = '取消',
  confirmText = '确定'
) =>
  new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      showCancel,
      cancelText,
      confirmText,
      success: () => {
        resolve(null)
      },
      fail: () => {
        reject()
      },
    })
  })

/**
 * 显示操作弹窗
 * @param { string[] } itemList 操作列表
 */
export const showActionSheet = (itemList = []) =>
  new Promise((resolve, reject) => {
    uni.showActionSheet({
      itemList,
      success: () => {
        resolve(null)
      },
      fail: () => {
        reject()
      },
    })
  })
