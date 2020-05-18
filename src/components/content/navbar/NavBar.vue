<template>
  <div class="nav-bar">
    <div><img src="~assets/img/main/title.png" alt="漻淤小路"></div>
    <div class="search-list">
      <input type="text" class="search" v-model="content" @keyup="throttle" @blur="blur">
      <ul v-show="isList" class="show-list">
        <li v-for="(item, index) in dataList" :key="index" class="hover-list clear-fix" @mousedown="itemClick(item.id)">
          <span class="normal">{{ item.frontTitle }}</span>
          <span class="high-light">{{ item.hightLightTitle }}</span>
          <span class="normal">{{ item.backTitle }}</span>
          <span class="author">{{ item.author }}</span>
        </li>
      </ul>
    </div>
    <div class="login-message">
      <div class="login-setting">
        <img src="~assets/img/main/waves.gif" alt="水纹">
        <span class="username"> 欢迎您：{{ username }}</span>
        <span class="set" @click.stop="letShow" :class="{ setclick:isClick }">设置</span>
        <transition name="slide-fade">
          <div v-show="isShow" class="isShow">
            <ul class="account">
              <li class="account-message" @click="gotoAccount">账号信息</li>
              <li class="quit-login" @click="gotoLogin">退出登录</li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="last-login">上次登录时间: {{ lastLoginTime }}</div>
    </div>
  </div>
  
</template>

<script>
import { searchDetail } from 'network/searchDetail'
import { searchBlog } from 'network/search'
import { debounce } from 'common/debounce'
export default {
  name: 'NavBar',
  data() {
    return {
      isShow: false,
      isClick: false,
      isList: false,
      content: '',
      dataList: []
    }
  },
  computed: {
    username() {
      return this.$store.state.user.username
    },
    lastLoginTime() {
      return this.$store.state.user.lastLoginTime
    }
  },
  methods: {
    gotoAccount() {
      this.isShow = false
      this.isClick = false
      this.$router.push('/main/account')
    },
    gotoLogin() {
      this.isShow = false
      this.isClick = false
      localStorage.clear()
      this.$store.commit('barShow', { isShow: false })
      this.$router.replace('/login')
    },
    letShow() {
      this.isShow = !this.isShow
      this.isClick = !this.isClick
    },
    blur() {
      this.isList = false
    },
    search() {
      // console.log(this.content)
      // 发送axios请求
      const content = this.content
      searchBlog({content}).then(res => {
        this.dataList = []
        if(res.data.result.length === 0) {
          this.dataList.push({backTitle: '搜索为空'})
          this.isList = true
          return
        }
        for(let i = 0; i < res.data.result.length; i++) {
          const frontTitle = res.data.result[i].title.substring(0, res.data.result[i].title.indexOf(content))
          const hightLightTitle = content
          const backTitle = res.data.result[i].title.substring(res.data.result[i].title.indexOf(content) + content.length)
          this.dataList.push({
            frontTitle,
            hightLightTitle,
            backTitle,
            author: res.data.result[i].author,
            id: res.data.result[i].articleid
          })
        }
        this.isList = true
      }).catch(err => {
        console.log(err)
      })
    },
    throttle() {
      
      const preContent = this.content
      const search = debounce(this.search, 1000)
      setTimeout(() => {
        const nowContent = this.content
        if(nowContent === preContent) {
          if(nowContent === '') {
            this.dataList = []
            this.isList = false
            return
          }
          search()
        }
      }, 300)
    },
    itemClick(id) {
      if(this.dataList[0].backTitle === '搜索为空') {
        return
      }
      const username = this.$store.state.user.username
      searchDetail({id, username}).then(res => {
        this.$store.commit('articleMessage', {
          title: res.data.contact[0].title,
          author: res.data.contact[0].author,
          views: res.data.contact[0].views,
          likes: res.data.contact[0].likes,
          comments: res.data.contact[0].comments,
          time: res.data.contact[0].time,
          isLike: res.data.isLike
        })
      }).catch(err => {
        console.log(err)
      })
      this.content = ''
      this.$router.push('/main/blog/detail/' + id)
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    justify-content: space-between;
    height: 40px;
    background-color: white;

    padding: 12px;
    border-bottom: 1px #cfd4db solid;
  }
  .search-list {
    position: relative;
  }
  .search {
    height: 25px;
    margin-top: 6.5px;
    background: url("~assets/img/main/search.svg") no-repeat left center;
    border: 1px #cfd4db solid;
    border-radius: 25px;
    padding-left: 20px;
  }
  .search:focus {
    border-color: #91b4ff;
    box-shadow: 0 0 5px #91b4ff;
    outline: none;
  }
  .show-list {
    position: absolute;
    z-index: 3000;
    width: 100%;
    list-style: none;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(245,249,255);
  }
  .hover-list {
    margin-bottom: .2em;
    padding-left: .2em;
    border-radius: 5px;
  }
  .hover-list:hover {
    background-color: rgb(211,225,255);
    cursor: pointer;
  }
  .high-light {
    color: black;
  }
  .normal {
    color: #cfd4db;
  }
  .author {
    float: right;
    font-size: 80%;
    margin-top: .2em;
  }
  .login-message {
    display: flex;
  }
  .login-message img {
    vertical-align: middle;
    margin-right: .1em;
  }
  .last-login {
    line-height: 40px;
  }
  .login-setting {
    position: relative;
  }
  .username {
    margin-right: .3em;
  }
  .set {
    cursor: pointer;
    margin-right:20px;
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    text-indent: -9999px;
    background: url("~assets/img/main/set.svg") no-repeat;
  }
  .setclick {
    background: url("~assets/img/main/set_hover.svg") no-repeat;
  }
  .slide-fade-enter-active {
  transition: all .4s;
  }
  .slide-fade-leave-active {
    transition: all .4s;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  .isShow::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 11px;
    background: url("~assets/img/main/triangle.png") no-repeat;
    position: absolute;
    z-index: 3000;
    left: 80%;
    top: 32px;
  }
  .account {
    list-style-type: none;
    padding: .4em;
    background: white;
    width: 50%;
    text-align: center;
    border: 1px #cfd4db solid;
    border-radius: 3px;
    position: absolute;
    left: 55%;
    z-index: 3000;
  }
  .account li {
    cursor: pointer;
  }
  .account-message {
    padding-bottom: .4em;
    border-bottom: 1px #cfd4db dotted;
  }
  .account-message:hover {
    color: #00A5ED;
  }
  .quit-login {
    padding-top: .4em;
    color: #91b4ff;
    font: bold 1em '微软雅黑';
  }
  .quit-login:hover {
    color: tomato;
  }
</style>
