<template>
  <div class="other">
    <h2>其他信息</h2>
    <div>
      <h3>图片来源</h3>
      <p>大多数图片来自 <a href="https://www.iconfont.cn/" class="iconfont">Iconfont-阿里巴巴矢量图标库</a></p>
    </div>
    <div>
      <h3>备案信息</h3>
      <p><a href="http://www.beian.miit.gov.cn/" class="icp">浙ICP备20004306号</a></p>
    </div>
    <div>
      <h3>版权信息</h3>
      <p>不用作商业用途，仅用作学习使用，有问题欢迎联系我们的团队</p> <br />
      <p>Copyright &copy; 2020-2020 Alex Yu</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherMsg'
}
</script>
<style scoped>
  .other {
    margin-bottom: 1em;
  }
  .other h2 {
    padding-bottom: 10px;
    border-bottom: 1px #ddd solid;
  }
  .other h3 {
    text-align: left;
    margin: 0.5em 0;
  }
  .iconfont:hover, .icp:hover {
    padding-bottom: .3em;
    border-bottom: 2px #91b4ff solid;
  }
  .iconfont::after, .icp::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 5px;
    border-radius: 50%;
    background: url("~assets/img/main/Iconfont.svg") no-repeat;
    vertical-align: middle;
  }
  .icp::before {
    background: url("~assets/img/main/ICP.svg") no-repeat;
  }
</style>