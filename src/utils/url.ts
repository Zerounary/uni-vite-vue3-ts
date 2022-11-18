
/**
 * 获取一个 url 中的查询字符串的对象形式
 *
 * @param { String } url 一个 url 字符串，默认值为 `location.href`
 * @returns { object } 从 url 中解析出的 query 对象，若不符合返回 `{}`
 * @example
 * const qs = 'https://x.com?id=1&name=hello&isShow=true'
 * querystringToObj(qs) // { id: '1', name: 'hello', isShow: 'true'}
 */
export const querystringToObj = (url = location ? location.href : '') => {
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /(?<key>[^?&=]+)=(?<value>[^?&=#]*)/gu
  search.replace(reg, (rs, $1, $2) => {
    const key = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[key] = val
    return rs
  })
  return obj
}

/**
 * 将对象转为 querystring ，不含问号
 *
 * @param { object } obj 要转为 querystring 的对象
 * @returns { string } 转换后的 querystring，不含问号 (?)
 * @example
 * const obj = { id: 10086, name: 'hello' }
 * objToQuerystring(obj) // 'id=10086&name=hello'
 */
export const objToQuerystring = obj => {
  let qs = ''
  const keys = Object.keys(obj)
  keys.forEach((key, i) => {
    if (obj[key]) {
      qs += `${key}=${obj[key]}${i < keys.length - 1 ? '&' : ''}`
    }
  })
  return qs
}

/**
 * 获取当前访问页面的 html 文件名
 *
 * @param { String } url 一个 url 字符串，默认值为 `location.href`
 * @returns { String } html 文件名
 * @example
 * getCurrentPageName('http://x.com/index.html#/home') // index
 */
export const getCurrentPageName = (url = location ? location.href : '') => {
  const reg = /\/(?<filename>[a-zA-Z]*?).html[/#]?/iu
  const result = url.match(reg)
  return result[1]
}

/**
 * 移除 url 的某些查询参数（query）
 *
 * @param { Array<string> } queryKeyList 需要移除的 query 的 key
 * @param { string } url 目标 url 地址，默认为当前访问的地址
 */
export const removeSomeQuery = (queryKeyList, url = location.href) => {
  const queryObj = querystringToObj(url)
  queryKeyList.forEach(key => {
    queryObj[key] && Reflect.deleteProperty(queryObj, key)
  })
  const questionMarkIndex = url.lastIndexOf('?')
  const end = questionMarkIndex < 0 ? undefined : questionMarkIndex
  const targetUrl = `${url.slice(0, end)}?${objToQuerystring(queryObj)}`
  return targetUrl
}

/**
 * 根据传入的 url 判断是否需要加上 baseURL
 *
 * @param { String } url 一个 url 字符串
 * @returns { String } 处理完成用于直接使用的 url 地址
 * @example
 * addBaseURL('/upload/1.jpg') // http://xxx.com/upload/1.jpg
 * addBaseURL('http://xxx.com/upload/1.jpg') // http://xxx.com/upload/1.jpg
 */
export const addBaseURL = url => {
  if (url.indexOf('/') === 0) {
    return process.env.VUE_APP_baseURL + url
  }
  return url
}
