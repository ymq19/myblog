<template>
  <div>
    <span class="back-blog" title="返回博客" @click="blogClick">返回博客</span>
  </div>
</template>

<script>
export default {
  name: 'BackBlog',
  methods: {
    blogClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .back-blog {
    cursor: pointer;
    display: inline-block;
    text-indent: -9999px;
    width: 48px;
    height: 48px;
    background: url("~assets/img/main/backblog_gray.svg") no-repeat;
    transition: all ease-in-out .4s;
  }
  .back-blog:hover {
    
    background: url("~assets/img/main/backblog.svg") no-repeat;
  }
</style>
