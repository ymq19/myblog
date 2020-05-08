import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
  user: {
    username: '游客模式',
    list: {},
    lastLoginTime: '1999年11月5日0时0分',
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    isLike: false
  },
  url: '/main',
  isMain: false,
  isLoading: false
}

const store = new Vuex.Store({
  state,
  // 计算属性
  getters: {

  },
  // 同步操作，唯一途径修改state
  mutations: {
    loading(state, payload) {
      state.isLoading = payload.isLoading
    },
    detail(state, payload) {
      state.isDetail = payload.isDetail
    },
    loginMessage(state, payload){
      // console.log(payload)
      localStorage.setItem('username', payload.res.data.username)
      localStorage.setItem('logintime', payload.res.data.logintime)
      state.user.username = localStorage.getItem('username')
      state.user.lastLoginTime = localStorage.getItem('logintime')
      state.isMain = payload.navShow
      state.Authorization = payload.Authorization
      // 保存token到loacalStorage
      localStorage.setItem('Authorization', payload.Authorization)
    },
    barShow(state, payload) {
      state.isMain = payload.isShow
      if(payload.redirect) {
        state.url = payload.redirect
      }
      state.user.username = localStorage.getItem('username') ? localStorage.getItem('username') : ''
      state.user.lastLoginTime = localStorage.getItem('logintime') ? localStorage.getItem('logintime') : ''
    },
    articleMessage(state, payload) {
      // console.log('okay')
      state.user.list = {
        title: payload.title,
        author: payload.author,
        views: payload.views,
        likes: payload.likes,
        comments: payload.comments,
        time: payload.time
      }
      
      state.user.isLike = payload.isLike ? true : false
      // console.log(state.user.list)
    },
    addLike(state, payload) {
      payload.like ? state.user.list.likes++ : state.user.list.likes-- 
    },
    likeAction(state, payload) {
      state.user.isLike = payload.isLike
    },
    addComment(state, payload) {
      console.log('comments')
      state.user.list.comments++
    }
  },
  // 异步操作
  actions: {
    likeAction(context, value) {
      context.commit('likeAction', value)
    }
  }
})

// 3.挂载Vue实例上 
export default store
