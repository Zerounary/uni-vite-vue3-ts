const uniStorage: Storage = {
  length: 0,
  clear: function (): void {
    uni.clearStorage()
  },
  getItem: function (key: string): string | null {
    return uni.getStorageSync(key)
  },
  key: function (index: number): string | null {
    const res = uni.getStorageInfoSync()
    return res.keys[index]
  },
  removeItem: function (key: string): void {
    uni.removeStorageSync(key)
  },
  setItem: function (key: string, value: string): void {
    uni.setStorageSync(key, value)
  },
}
export default uniStorage
