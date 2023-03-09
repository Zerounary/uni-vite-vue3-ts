import { defineStore } from 'pinia'
import REQ from '@/utils/http'
import { uniLogin } from '@/utils/mp-weixin'

export const usePersonStore = defineStore('person', {
  state: () => {
    return {
      token: '' as string,
      userInfo: null,
      session_key: '',
    }
  },
  actions: {
    //系统登录
    handleLogin() {
      return new Promise((resolve, reject) => {
        uniLogin((data: any) =>
          REQ({
            url: '/api/weixin/login',
            data,
          })
        ).then((res: any) => {
          if (res) {
            //获取到用户信息， 存储
            const { userInfo, manager, volunteer } = res
            this.token = userInfo.token
            this.userInfo = userInfo
            resolve(this.userInfo)
          } else {
            //未获取到用户信息，异常
            reject()
          }
        })
      })
    },
    reqPhoneNumber({ code }) {
      return new Promise((resolve, reject) => {
        REQ({
          url: "/api/weixin/phoneNumber",
          method: "POST",
          data: {
            code,
          },
        }).then((res: any) => {
          if (res) {
            resolve(res)
          } else {
            reject()
          }
        });
      })
    },
    //获取电话号码所需参数
    fetch_wx_getSessionKey() {
      return new Promise((resolve, reject) => {
        uniLogin((data: any) =>
          REQ({
            url: '/api/weixin/getSessionKey',
            method: "POST",
            data,
          })
        ).then((res: any) => {
          if (res) {
            //获取到用户信息， 存储
            const { session_key } = res
            this.session_key = session_key
            resolve(res)
          } else {
            //未获取到用户信息，异常
            reject()
          }
        })
      })
    },
    //手机号解密
    fetch_wx_setDecryptData({ session, iv, encryptedData }) {
      return new Promise((resolve, reject) => {
        REQ({
          url: '/api/weixin/decryptData',
          method: "POST",
          data: {
            session,
            iv,
            encryptedData,
          },
        }).then((res: any) => {
          if (res) {
            resolve(res)
          } else {
            //未获取到用户信息，异常
            reject()
          }
        })
      })
    },
  }
})
