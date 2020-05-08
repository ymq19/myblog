<template>
  <div class="nav-bar">
    <div><img src="~assets/img/main/title.png" alt="漻淤小路"></div>
    <div><input type="text" class="search"></div>
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
export default {
  name: 'NavBar',
  data() {
    return {
      isShow: false,
      isClick: false
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
    outline: none;
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
