<template>
  <div class="detail">
    <blog-message :item="item" class="blog-message">
      <template v-slot:title>
        <h2>{{ title }}</h2>
      </template>
    </blog-message>
    <mavon-editor :value="content" :subfield="false" 
    defaultOpen="preview" :toolbarsFlag="false" :editable="false" :scrollStyle="true" 
     previewBackground="#ffffff" :boxShadow="false" />
    <likes class="likes" @addLike="addLike" />
    <comments class="comments" @addComment="addComment" />
    <div class="nav">
      <back-blog class="blog-back" />
    </div>
  </div>
</template>

<script>
import qs from 'querystring'
import { blogDetail } from 'network/blogDetail' 
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Likes from './childComps/Likes'
import Comments from './childComps/Comments'
import BlogMessage from 'components/content/blogMessage/BlogMessage'
import BackBlog from 'components/common/backBlog/BackBlog'
export default {
  name: 'Detail',
  data() {
    return {
      id: this.$route.params.id,
      title: '',
      content: '',
    }
  },
  computed: {
    item() {
      return this.$store.state.user.list
    }
  },
  components: {
    mavonEditor,
    BlogMessage,
    BackBlog,
    Likes,
    Comments
  },
  created() {
    this.blogDetailReq()
  },
  methods: {
    blogDetailReq() {
      const id = this.id
      const data = qs.stringify({id})
      blogDetail(data).then(res => {
        this.title = res.data.title
        this.content = res.data.content
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    addLike(like) {
      this.$store.commit('addLike', {like})
    },
    addComment() {
      this.$store.commit('addComment')
    }
  }
}
</script>

<style scoped>
  .detail {
    margin-left: 240px;
    height: calc(100vh - 65px);
    width: calc(100vw - 240px);
    overflow: auto;

    /* 用户可选择文字 */
    -moz-user-select: text;
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
  h2 {
    text-align: center;
    font-size: 35px;
  }
  .nav {
    position: fixed;
    bottom: 60px;
    right: 60px;
    z-index: 2000;
  }
  .likes {
    margin: 20px auto;
  }
  .comments {
    margin-right: 20px;
  }
</style>
