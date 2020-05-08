<template>
  <div class="likes" @click="likeClick">
    <span class="like-img" title="喜欢❤" :class="{ imgvisited:getLike }">喜欢</span> 
    <span :class="{ textvisited:getLike }">点个赞，再走呗</span>
  </div>
</template>

<script>
import { addLike } from 'network/addLike'
export default {
  name: 'Likes',
  data() {
    return {
      isVisited: false
    }
  },
  computed: {
    getLike() {
      this.isVisited = this.$store.state.user.isLike
      return this.isVisited
    }
  },
  methods: {
    likeClick() {
      this.isVisited = !this.isVisited
      const isLike = this.isVisited
      this.$store.dispatch('likeAction', {isLike})
      // 喜欢+1
      const id = this.$route.params.id
      const username = this.$store.state.user.username
      const like = this.isVisited
      const data = {id, like, username}
      addLike(data).then(res => {
        // console.log(res)
        this.$emit('addLike', like)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .likes {
    cursor: pointer;
    width: 160px;
    background-color: #F5F5F5;
    border-radius: 5px;

    transition: all ease-in-out .3s;
    -moz-transition: all ease-in-out .3s; /* Firefox 4 */
    -webkit-transition: all ease-in-out .3s; /* Safari 和 Chrome */
    -o-transition: all ease-in-out .3s; /* Opera */
  }
  .likes:hover {
    box-shadow: 0 0 15px #91b4ff;
  }
  .like-img {
    display: inline-block;
    text-indent: -9999px;
    width: 32px;
    height: 32px;
    background: url("~assets/img/main/likes_gray.svg") no-repeat;
    vertical-align: middle;
  }
  .textvisited {
    color: #91b4ff;
  }
  .imgvisited {
    background: url("~assets/img/main/likes.svg") no-repeat;
  }
</style>
