<template>
  <div class="login">
    <form @submit.prevent="confrimUser">
      <user-message-input class="login-input">
        <template v-slot:user>
          <div>
            <label for="user"><img src="~assets/img/login/user.png" alt="用户名"></label><input type="text" id="user" placeholder="用户名"
             v-focus v-model="user.username">
          </div>
        </template>
        <template v-slot:password>
          <div>
            <label for="password"><img src="~assets/img/login/password.png" alt="密码"></label><input type="password" id="password" placeholder="密码"
            v-model="user.password">
          </div>
        </template>
        <template v-slot:button>
          <div>
            <button type="submit">登录</button>
          </div>
        </template>
      </user-message-input>
    </form>
  </div>
</template>

<script>
import qs from 'querystring'
import {formatDate} from 'common/timeTranslate'
import {toLogin} from 'network/login'
import UserMessageInput from 'components/content/userMessageInput/UserMessageInput'
export default {
  name: 'Login',
  components: {
    UserMessageInput
  },
  data() {
    return{
      user: {
        username: '',
        password: '',
        userToken: ''
      }
    }
  },
  methods: {
    confrimUser() {
      // 网络请求，判断登录是否成功 axios
      // 1.登录成功，就去blog页面
      // 2.登录失败，就提示 用户名或密码错误
      const username = this.user.username
      const password = this.user.password
      const date = new Date()
      const timeStr = formatDate(date)
      const data = qs.stringify({username, password, timeStr})
      toLogin(data).then(res => {
        if(res.data === 'error') {
          this.$emit('wrongTip','用户名或密码错误')
        }else {
          this.user.userToken = res.data.token
          this.$store.commit('loginMessage', { res, navShow: true, Authorization: this.user.userToken })
          this.$router.replace(this.$store.state.url)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
  label {
    margin-right: 10px;
  }
  img {
    height: 30px;
    position: relative;
    top: 10px;
    left: -10px;
  }
  input {
    height: 30px;
    border: none;
    border: 1px #666 solid;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left: 0.5em;
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 10px #91b4ff;
  }
  input::-webkit-input-placeholder {
    color: #ccc;
  }
  input::-moz-input-placeholder {
    color: #ccc;
  }
  input::-ms-input-placeholder {
    color: #ccc;
  }
  button {
    margin-top: 1em;

    width: 150px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ddd;
    transition: ease-in-out .4s;
    -moz-transition: ease-in-out .4s; /* Firefox 4 */
    -webkit-transition: ease-in-out .4s; /* Safari 和 Chrome */
    -o-transition: ease-in-out .4s; /* Opera */
    color: #fff;
  }
  button:hover {
    background-color: #91b4ff;
  }
  button:focus,button:active {
    width: 180px;
    height: 100px;
    outline: none;
    background-image: url("~assets/img/login/loading.gif");
  }
</style>
