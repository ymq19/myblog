<template>
  <div class="main">
    <transition name="slide-fade">
      <div v-show="show">
        <p>欢迎来到 漻淤小路 博客之家</p><br />
        <p>点击左侧导航按钮进行体验吧</p> <br />
        <p><img src="~assets/img/main/left.svg" alt="" class="left-pointer" @click="show = false"></p>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      show: true
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>
  .main {
    margin-left: 220px;
    margin-top: 220px;
    text-align: center;
    font-size: 50px;
    font-family: "楷体";
  }
  .left-pointer {
    cursor: pointer;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to{
    transform: translateX(-100px);
    opacity: 0;
  }
</style>
