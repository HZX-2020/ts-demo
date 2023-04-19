// 封装一个完美的ts下的 axios

import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import store from '@/store'

// 创建一个axios实例

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    if (store.getters.token) {
      config.headers['Authorization'] = 'Bearer ' + store.getters.token
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 如果自定义代码不是20000，则判断为错误。
    if (res.code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: 非法的token; 50012: 其他客户端登录了; 50014: Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

