<template>
  <div class="user-message">
    <transition name="fade">
      <toast-wrong v-show="isTip" :tip="wrongMessage" class="wrong" />
    </transition>
    <div class="user-message-item">
      <div class="geo-image"><img src="~assets/img/login/geo.gif" alt="几何图案"></div>
      <div>
        <h2 class="title">漻淤小路</h2>
        <div class="switch"><span @click="switchToLogin" class="normal" :class="{bottomLine: isShow}">登录</span> <span @click="switchToReg" class="normal" :class="{bottomLine: !isShow}">注册</span></div>
        <login v-if="isShow" @wrongTip="wrongTip" /> 
        <register v-else @wrongTip="wrongTip" @register="registerToLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import ToastWrong from 'components/common/toast/ToastWrong'
import Login from './childComps/Login'
import Register from './childComps/Register'
export default {
  name: 'UserMessage',
  components: {
    ToastWrong,
    Login,
    Register
  },
  data() {
    return {
      isShow: true,
      isTip: false,
      wrongMessage: ''
    }
  },
  methods: {
    switchToLogin() {
      this.isShow = true
    },
    switchToReg() {
      this.isShow = false
    },
    registerToLogin() {
      this.isShow = true
    },
    wrongTip(wrong) {
      this.wrongMessage = wrong
      this.isTip = true
      setTimeout(() => {
        this.isTip = false 
      }, 2000)
    }
  }
}
</script>

<style scoped>
  .user-message {
    height: 100vh;
    text-align: center;
    background-color: #eee;
  }
  .title {
    width: 328px;
    height: 75px;
    text-indent: -9999px;
    margin-left: 1em;
    margin-top: -1em;
    margin-bottom: 1em;
    background: url("~assets/img/login/title.png") no-repeat;
  }
  .switch {
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: space-around;

    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .normal {
    font-size: 20px;
    cursor: pointer;
  }
  .user-message-item {
    display: flex;
    justify-content: center;

    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
  }
  .bottomLine {
    color: #3778ff;
    font-size: 30px;
    transition: font-size ease .3s;
    -moz-transition: font-size ease .3s; /* Firefox 4 */
    -webkit-transition: font-size ease .3s; /* Safari 和 Chrome */
    -o-transition: font-size ease .3s; /* Opera */
    border-bottom: 2px #91b4ff solid;
  }
    /* 错误提示框 */
  .wrong {
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 0%);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
