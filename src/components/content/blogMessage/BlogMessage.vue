<template>
  <div>
    <slot name="title"></slot>
    <span class="author">
      <img src="~assets/img/main/author.svg" alt="作者" title="作者">
      {{ item.author }}
    </span>
    <span class="views">
      <img src="~assets/img/main/views.svg" alt="浏览" title="浏览">
      {{ item.views }}
    </span>
    <span class="likes">
      <img src="~assets/img/main/likes.svg" alt="喜欢" title="喜欢">
      {{ item.likes }}
    </span>
    <span class="comments">
      <img src="~assets/img/main/comments.svg" alt="评论" title="评论">
      {{ item.comments }}
    </span>
    <span class="time right">
      <img src="~assets/img/main/time.svg" alt="时间" title="时间">
      {{ item.time }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BlogMessage',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  h2 {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  img {
    vertical-align: middle;
    cursor: pointer;
  }
  .author, .views, .likes {
    margin-right: 12px;
  }
  .time {
    margin-right: 20px;
  }
</style>
