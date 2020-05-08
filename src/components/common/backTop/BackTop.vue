<template>
  <div>
    <span class="back-top" title="返回顶部" @click="topClick()" ref="top">返回顶部</span>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    topClick() {
      // 返回顶部
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop )
    }
  }
}
</script>

<style scoped>
  .back-top {
    cursor: pointer;
    display: inline-block;
    text-indent: -9999px;
    width: 48px;
    height: 48px;
    background: url("~assets/img/main/top_gray.svg") no-repeat;
    transition: all ease-in-out .4s;

  }
  .back-top:hover {
    
    background: url("~assets/img/main/top.svg") no-repeat;
  }
</style>
