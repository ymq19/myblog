<template>
  <div class="page-control">
    <img src="~assets/img/main/forward.svg" alt="向前" class="forward" 
    :class="{bancursor : isBanForwardCursor}" @click="forward">
    <span v-for="(item, index) in blogPage" :key="index" class="blog-page" :class="{currentpage : isCurrentPage === index}" @click="changePage(index)">
      {{ item }}
    </span>
    <img src="~assets/img/main/back.svg" alt="向后" class="back" 
    :class="{bancursor : isBanBackCursor}" @click="back">
  </div>
</template>

<script>
export default {
  name: 'PageControl',
  props: {
    blogPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isCurrentPage: 0,
      isBanForwardCursor: true,
      isBanBackCursor: false
    }
  },
  methods: {
    pointer() {
      if(this.isCurrentPage === 0) {
        this.isBanForwardCursor = true
      } else {
        this.isBanForwardCursor = false
      }
      if(this.isCurrentPage === this.blogPage - 1) {
        this.isBanBackCursor = true
      } else {
        this.isBanBackCursor = false
      }
    },
    changePage(index) {
      this.isCurrentPage = index
      this.pointer()
      this.$emit('page-change', this.isCurrentPage + 1)
    }, 
    forward() {
      this.isCurrentPage--
      if(this.isCurrentPage < 0) {
        this.isCurrentPage = 0
      }
      this.pointer()
      this.$emit('page-change', this.isCurrentPage + 1)
    },
    back() {
      this.isCurrentPage++
      if(this.isCurrentPage === this.blogPage) {
        this.isCurrentPage = this.blogPage - 1
      }
      this.pointer()
      this.$emit('page-change', this.isCurrentPage + 1)
    }
  }
}
</script>

<style scoped>
  .page-control {
    width: 50%;
    margin: 15px auto;
    text-align: center;
  }
  .forward {
    margin-right: 10px;
    cursor: pointer;
  }
  .back {
    margin-left: 5px;
    cursor: pointer;
  }
  .blog-page {
    margin-right: 5px;
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 18px;

    line-height: 30px;
    cursor: pointer;
  }
  .blog-page:hover {
    background-color: #E0FFFF;
    border-radius: 50%;
  }
  .currentpage {
    border-radius: 50%;
    background-color: #87CEFF;
  }
  .currentpage:hover {
    background-color: #87CEFF;
  }
  .bancursor {
    cursor: not-allowed;
  }
</style>
