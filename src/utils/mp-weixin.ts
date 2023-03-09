import { usePersonStore } from "@/stores/person"

/**
 * 获取匿名用户信息
 * @param { String } code 微信登陆凭证
 * @param { (code: string) => Promise<object> } reqLogin 请求服务端登录接口的函数
 * @returns { Promise<object> }
 */
export const uniGetUserInfoAnonymity = (code:any, reqLogin:any) => new Promise((resolve, reject) => {
  uni.getUserInfo().then((res:any) => {
    if ('getUserInfo:ok' === res.errMsg) {
      if (typeof reqLogin === 'function') {
        reqLogin({
          code,
        }).then((res:any) => {
          resolve(res)
        }).catch(reject)
      } else {  
        resolve(res.userInfo)
      }
    } else {
      reject(res.errMsg)
    }
  })
})

/**
 * 微信登录
 * @param { (code: string) => Promise<object> } reqLogin 请求服务端登录接口的函数
 * @returns { Promise<object> }
 */
export const uniLogin = reqLogin => new Promise((resolve, reject) => {
  uni.login().then((res) => {
    const { errMsg,code } = res
    if ('login:ok' === errMsg) {
      uniGetUserInfoAnonymity(code, reqLogin).then(res => resolve(res)).catch(reject)
    } else {
      reject(errMsg)
    }
  })
})


/**
 * 获取微信手机号
 * @param { Object } detail 授权返回信息
 * @returns { Promise<object> }
 */
 export const wxGetPhoneNumber = (detail: any) => new Promise((resolve, reject) => {
  console.log('🚀 ~ file: mp-weixin.ts:50 ~ wxGetPhoneNumber ~ detail', detail)
  if (detail.errMsg === 'getPhoneNumber:ok') {
    const wxLogin = usePersonStore()
    // 有code直接请求接口
    if (detail.code) {
      wxLogin.reqPhoneNumber({ code: detail.code }).then((res: any) => {
        resolve(res)
      }).catch(reject)
    } else {
      wxLogin.fetch_wx_getSessionKey().then((res: any) => {
        wxLogin.fetch_wx_setDecryptData({
          session: res.session_key,
          iv: detail.iv,
          encryptedData: detail.encryptedData,
      }).then((res: any) => {
          resolve(res)
        }).catch(reject)
      })
    }
  }
})