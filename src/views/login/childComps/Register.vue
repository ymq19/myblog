<template>
  <div class="register">
    <form @submit.prevent="confrimUser">
      <user-message-input class="register-input">
        <template v-slot:user>
          <div class="username">
            <label for="user"><img src="~assets/img/login/user.png" alt="用户名" title="3~10个字符，以字母开头，且只能包含字母、数字和下划线"></label><input type="text" id="user" placeholder="输入用户名"
             v-focus v-model="user.username">
          </div>
        </template>
        <template v-slot:password>
          <div class="password">
            <label for="password"><img src="~assets/img/login/password.png" alt="密码" title="6~18个字符，以字母开头，且只能包含字母、数字和下划线"></label><input type="password" id="password" placeholder="输入密码"
             v-model="user.password">
          </div>
        </template>
        <template v-slot:password-again>
          <div class="password-again">
            <label for="password-again"><img src="~assets/img/login/password.png" alt="密码"></label><input type="password" id="password-again" placeholder="再次输入密码"
             v-model="user.passwordAgain">
          </div>
        </template>
        <template v-slot:button>
          <div>
            <button type="submit">注册</button>
          </div>
        </template>
      </user-message-input>
    </form>
  </div>
</template>

<script>
import qs from 'querystring'
import {formatDate} from 'common/timeTranslate'
import {toRegister} from 'network/register'
import UserMessageInput from 'components/content/userMessageInput/UserMessageInput'
export default {
  name: 'Register',
  components: {
    UserMessageInput
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        passwordAgain: ''
      },
      isTip: false
    }
  },
  methods: {
    confrimUser() {
      // 验证注册信息的正确性并发送给服务器
      // console.log(this.user)
      const usernameReg = /^[a-zA-Z][a-zA-Z0-9_]{2,9}$/
      const passwordReg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
      // axios请求

      if(usernameReg.test(this.user.username) == false){
        // console.log('用户名输入错误')
        this.$emit('wrongTip', '用户名不符合规范')
      }else if(passwordReg.test(this.user.password) == false) {
        // console.log('密码输入错误')
        this.$emit('wrongTip', '密码不符合规范')
      }else if(this.user.password != this.user.passwordAgain) {
        // console.log('两次输入的密码不一样')
        this.$emit('wrongTip', '两次输入的密码不一致')
      }else {
        const username = this.user.username
        const password = this.user.password
        const date = new Date()
        const timeStr = formatDate(date)
        const data = qs.stringify({username, password, timeStr})
        toRegister(data).then(res => {
          if(res.data === 'exist') {
            this.$emit('wrongTip', '用户名已存在')
          }else {
            console.log(res)
            this.$emit('register')
          }
        }).catch(err => {
          console.log(err)
        })
      }
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
    border: 1px #666 solid;
    border-radius: 5px;
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
  .username, .password, .password-again {
    position: relative;
    margin-bottom: 10px;
  }
  .password-again {
    margin-bottom: 20px;
  }
  .username::after, .password::after {
    content: "⚪3~10个字符，以字母开头，且只能包含字母、数字和下划线";
    display: block;
    font-size: 10px;
    padding-top: 2px;
  }
  .password::after {
    content: "⚪5~16个字符，以字母开头，且只能包含字母、数字和下划线";
  }
  .input-tip {
    position: absolute;
    top: 30%;
    right: -65%;
    font-size: 10px;
  }
</style>
