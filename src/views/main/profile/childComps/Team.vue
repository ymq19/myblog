<template>
  <div class="team">
    <h2>开发者团队</h2>
    <div>
      <h3>团队成员</h3>
      <p class="name">{{ teamMember[0].name }}</p>
    </div>
    <div>
      <h3>成员信息</h3>
      <div class="contact">
        <p class="name">{{ teamMember[0].name }}：{{ teamMember[0].msg }}</p>
        <div class="contact-bg">
          <div class="qq social">
            <div class="code"><img src="~assets/img/main/qq_code.png" alt="QQ二维码"></div>
          </div>
          <div class="wechat social">
            <div class="code"><img src="~assets/img/main/wechat_code.png" alt="微信二维码"></div>
          </div>
          <div class="weibo social">
            <div class="code"><img src="~assets/img/main/weibo_code.png" alt="微博二维码"></div>
          </div>
          <div class="github social">
            <div class="code"><img src="~assets/img/main/github_code.png" alt="GitHub二维码"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  props: {
    teamMember: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .team h2 {
    padding-bottom: 10px;
    border-bottom: 1px #ddd solid;
  }
  .team h3 {
    text-align: left;
    margin: 0.5em 0;
  }
  .name::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 5px;
    border-radius: 50%;
    background: url("~assets/img/main/gemgem.png") no-repeat;
    background-size: cover;
    vertical-align: middle;
  }
  .contact {
    border-bottom: 1px #ddd dotted;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }
  .contact-bg {
    display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
    display: -moz-box; /* Firefox 17- */
    display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
    display: -moz-flex; /* Firefox 18+ */
    display: -ms-flexbox; /* IE 10 */
    display: flex;
    justify-content: center;
  }
  /* .qq:hover, .wechat:hover, .weibo:hover, .github:hover {
    /* background-color: black; */
  .social {
    width: 32px;
    height: 32px;
    margin-top: 0.5em;
    cursor: pointer;
    position: relative;
  }
  .qq {
    background: url("~assets/img/main/qq.svg") no-repeat;
    margin-right: 1em;
  }
  .wechat {
    background: url("~assets/img/main/wechat.svg") no-repeat;
    margin-right: 1em;
  }
  .weibo {
    background: url("~assets/img/main/weibo.svg") no-repeat;
    margin-right: 1em;
  }
  .github {
    background: url("~assets/img/main/github.svg") no-repeat;
  }
  .social:hover .code {
    opacity: 1;
  }
  .code {
    opacity: 0;
    position: absolute;
    bottom: 32px;
    left: -85px;
    transition: opacity ease-in-out .5s;
    -moz-transition: opacity ease-in-out .5s; /* Firefox 4 */
    -webkit-transition: opacity ease-in-out .5s; /* Safari 和 Chrome */
    -o-transition: opacity ease-in-out .5s; /* Opera */
  }
  .code img{
    width: 200px;
  }
</style>
