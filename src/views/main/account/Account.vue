<template>
  <div class="account">
    <div class="account-bg">
      <div class="account-message">
        <p>用户名：{{ getUsername }}</p>
        <p>注册时间：{{ account.regitime }}</p>
        <p>已发博客数：{{ account.blognum }}</p>
        <p>帖子浏览量：{{ account.views }}</p>
        <p>获得点赞数：{{ account.likes }}</p>
        <p>评论数：{{ account.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { accountMessage } from 'network/accountMessage'
export default {
  name: 'Account',
  data() {
    return {
      account: {
        blognum: 0,
        views: 0,
        likes: 0,
        comments: 0,
        regitime: ''
      }
    }
  },
  computed: {
    getUsername() {
      return this.$store.state.user.username
    }
  },
  activated() {
    const username = this.getUsername
    accountMessage({username}).then(res => {
      const index = res.data.account.regitime.lastIndexOf('日')
      const regitime = res.data.account.regitime.substring(0, index + 1)
      this.account.blognum = res.data.account.blognum
      this.account.views = res.data.account.views
      this.account.likes = res.data.account.likes
      this.account.comments = res.data.account.comments
      this.account.regitime = regitime
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  .account {
    background: url("~assets/img/main/star.png");
    margin-left: 220px;
    height: calc(100vh - 65px);
    overflow: auto;
    position: relative;
    color: black;
    font: italic bold 16px "仿宋";
  }
  .account-bg {
    cursor: pointer;
    width: 300px;
    height: 400px;
    background: url("~assets/img/main/flowers.png") no-repeat;
    border-radius: 20px;
    /* background-color: thistle; */
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -200px;
    transition: all ease-in-out .4s;
  }
  .account-bg:hover {
    box-shadow: 0 0 30px #FFC125;
  }
  .account-message {
    margin-top: 130px;
  }
  .account-message p {
    margin-bottom: 10px;
  }
</style>
