import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://www.manati.cn/public'
axios.defaults.timeout = 0
Vue.prototype.$axios = axios

axios.interceptors.response.use(response => {
  // if (response.headers['content-type'] === 'text/html') {
  //   response.headers['content-type'] = 'text/css'
  // }

  // console.log(response)
  return response
})
axios.interceptors.request.use(request => {
  // request.headers['content-type'] = 'text/css'
  // console.log(request)
  return request
})
/**
 *
 * @param {obj} obj
 * axios所需要的所有参数
 * 调用时需要配合async 与 await
 */
async function getData (obj) {
  // 解构传过来的请求信息

  let {
    method = 'get',
    baseURL,
    url,
    params,
    data, headers,
    timeout
  } = obj

  const res = await new Promise((resolve, reject) => {
    // 判断是否输入网址
    if (!baseURL && !url) {
      alert('请输入网址')
      return
    }
    // 发送请求
    axios({
      method,
      baseURL,
      url,
      params,
      data,
      headers,
      timeout
    }).then(res => { // 请求成功
      if (res.data.status === 'success' && res.data.code === 200) {
        resolve(res.data)
        // console.log(res.data)
      } else if (res.data.code === 403) {
        reject(res.data)
        throw new Error('服务器拒绝请求')
      } else if (res.data.code === 503) {
        reject(res.data)
        throw new Error('服务器超时')
      } else if (res.data.code === 404) {
        reject(res.data)
        throw new Error('请求的网页不存在')
      } else if (res.data.status === 'error') {
        reject(res.data)
        throw new Error('请求错误，请检查路径是否正确，请重新输入')
      }
    }, err => { // 失败
      reject(err)
      throw new Error(err)
    })
  })
  return res
}

export {
  getData
}
