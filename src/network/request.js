import axios from 'axios'
import store from '../store'
import router from '../router'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://ymq19.xyz:3000',
    timeout: 5000,
    headers: {
      
    }
  })
  // axios拦截器
  instance.interceptors.request.use(config => {
    // 配置config
    if(localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization')
    }
    store.commit('loading', {isLoading:true})
    return config
  }, err => {
    // alert('服务器响应超时，点击确定即自动刷新页面')
    console.log(err)
    // window.location.reload()
  })
  instance.interceptors.response.use(res => {
    store.commit('loading', {isLoading:false})
    if(res.data.status === 10010) {
      localStorage.clear()
      store.commit('barShow', { isShow: false })
      router.replace({
        path: '/login',
        query: { redirect: store.state.url }
      })
    }
    return res
  }, err => {
    // alert('服务器响应超时，点击确定即自动刷新页面')
    console.log(err)
    // window.location.reload()
  })
  // 发送真正的网络请求
  return instance(config)
}