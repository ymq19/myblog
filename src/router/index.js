import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// 重写vue-router方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// 路由懒加载
const UserMessage  = () => import('views/login/UserMessage')
const Main = () => import('views/main/Main')
const Blog = () => import('views/main/blog/Blog')
const Profile = () => import('views/main/profile/Profile')
const Index = () => import('views/main/index/Index')
const Account = () => import('views/main/account/Account')
const AddBlog = () => import('views/main/addBlog/AddBlog')
const Detail = () => import('views/main/detail/Detail')

// 安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: UserMessage
  },
  {
    path: '/register',
    component: UserMessage
  },
  {
    path: '/main',
    component: Main,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/main/index',
    component: Index,
    meta: {
      title: '首页介绍'
    }
  },
  {
    path: '/main/account',
    component: Account,
    meta: {
      title: '账号信息'
    }
  },
  {
    path: '/main/blog',
    component: Blog,
    meta: {
      title: '博客'
    }
  },
  {
    path: '/main/addblog',
    component: AddBlog,
    meta: {
      title: '新建博客'
    }
  },
  {
    path: '/main/profile',
    component: Profile,
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/main/blog/detail/:id',
    component: Detail,
    meta: {
      title: '博客详情'
    }
  }
]

// 创建对象
const router = new VueRouter({
  routes,
  mode: 'history'
})


// 前置导航守卫
router.beforeEach((to, from, next) => {
  // 设置网站标题
  if(to.meta.title) {
    document.title = to.meta.title
  }
  if(to.path !== '/login' && !localStorage.getItem('Authorization')) {
    document.title = '登录'
    next('/login')
  } else if(to.path !== '/login'){
      store.commit('barShow', { isShow: true, redirect: to.path })
      next()
  } else {
    next()
  }
  next()
})

// 导出
export default router
