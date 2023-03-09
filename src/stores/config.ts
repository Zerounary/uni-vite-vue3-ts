import { defineStore } from 'pinia'
import REQ from '@/utils/http'

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      config: null as any,
    }
  },
  getters: {},
  actions: {
    //获取配置
    async fetch_config() {
      let data = await REQ({
        url: '/api/common/getConfig',
        method: 'GET',
      })
      this.config = data
    },
  },
})
