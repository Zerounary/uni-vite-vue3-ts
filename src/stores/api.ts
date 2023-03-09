import { defineStore } from 'pinia'
import REQ from '@/utils/http'

export const useApiStore = defineStore('api', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    login() {
      REQ({
        url: '/api/getInfo',
        method: 'GET',
      })
    },
  },
})
