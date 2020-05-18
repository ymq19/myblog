<template>
  <div class="user-message">
    <transition name="fade">
      <toast-wrong v-show="isTip" :tip="wrongMessage" class="wrong" />
    </transition>
      <div class="user-message-item">
        <transition name="img-disappear">
          <div class="gem-image" v-show="isImgCancel"><img src="~assets/img/login/gem.png" alt="摩天动物园"></div>
        </transition>
        <transition name="disappear">
          <div class="login-content" v-show="isCancel">
            <div class="cancel" @click="cancelClick">X</div>
            <h2 class="title">漻淤小路</h2>
            <div class="switch"><span @click="switchToLogin" class="normal" :class="{bottomLine: isShow}">登录</span> <span @click="switchToReg" class="normal" :class="{bottomLine: !isShow}">注册</span></div>
            <login v-if="isShow" @wrongTip="wrongTip" /> 
            <register v-else @wrongTip="wrongTip" @register="registerToLogin" />
          </div>
        </transition>
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
      wrongMessage: '',
      isCancel: true,
      isImgCancel: true
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
    },
    cancelClick() {
      this.isCancel = false
      this.isImgCancel = false
      setTimeout( () => {
        this.isImgCancel = true
      }, 510)
    }
  }
}
</script>

<style scoped>
  .user-message {
    height: 100vh;
    text-align: center;
    background-color: #ddd;
  }
  .login-content {
    width: 500px;
    height: 400px;
    background-color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    position: relative;
  }
  .cancel {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    top: .3em;
    right: .5em;
    color: rgb(33,32,87);
    transition: .6s;
    -moz-transition: .6s; /* Firefox 4 */
    -webkit-transition: .6s; /* Safari 和 Chrome */
    -o-transition: .6s; /* Opera */
  }
  .cancel:hover {
    transform: rotate(180deg);
    -moz-transform: rotate(180deg); 
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
  }
  .title {
    font-size: 30px;
    margin: 1em 0;
    color: rgb(33,32,87);
  }
  .title::after, .title::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-left: .3em;
    vertical-align: middle;
    background: url("~assets/img/login/road.svg") no-repeat;
  }
  .title::before {
    margin-left: 0;
    margin-right: .3em;
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
  .gem-image img {
    width: 400px;
    height: 400px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .bottomLine {
    color: rgb(33,32,87);
    font-size: 30px;
    transition: font-size ease .3s;
    -moz-transition: font-size ease .3s; /* Firefox 4 */
    -webkit-transition: font-size ease .3s; /* Safari 和 Chrome */
    -o-transition: font-size ease .3s; /* Opera */
    border-bottom: 2px rgb(33,32,87) solid;
  }
    /* 错误提示框 */
  .wrong {
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 0%);
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .disappear-enter-active, .disappear-leave-active {
    transform: translateX(30%);
    transition: all .3s;
  }
  .disappear-enter, .disappear-leave-to {
    opacity: 0;
  }
  .img-disappear.enter.active, .img-disappear-leave-active {
    transform: translateX(50%);
    transition: all .3s;
  }
  .img-disappear-enter, .img-disappear-leave-to {
    opacity: 0;
  }
</style>
