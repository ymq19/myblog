<template>
  <div class="loading">
    <img src="~assets/img/main/loading.gif" alt="加载中">
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
  .loading {
    text-align: center;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 2000;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>