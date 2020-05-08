<template>
  <div class="blog">
    <div v-for="(item, index) in blogViewData.list" :key="index" class="item-block" @click="gotoDetail(item.id, index)">
      <blog-message :item="item" class="blog-message">
        <template v-slot:title>
          <h2>{{ item.title }}</h2>
        </template>
      </blog-message>
    </div>
    <page-control :blogPage="blogPage" @page-change="pageChange" v-show="isPageControl"/>
  </div>
</template>

<script>
import { blogViewShow } from 'network/blogViewShow'
import { viewDetail } from 'network/viewDetail'
import PageControl from 'components/common/pageControl/PageControl'
import BlogMessage from 'components/content/blogMessage/BlogMessage'
export default {
  name: 'Blog',
  data() {
    return {
      blogViewData: {
        page: 1,
        list: []
      },
      // 总共有几页
      blogPage: 0,
      isPageControl: false
    }
  },
  components: {
    PageControl,
    BlogMessage
  },
  // created() {
  //   this.blogNet(this.blogViewData.page)
  // },
  activated() {
    this.blogNet(this.blogViewData.page)
  },
  methods: {
    blogNet(page) {
      blogViewShow(page).then(res => {
        // console.log(res)
        this.blogViewData.list = []
        this.isPageControl = true
        for(let i = 0; i < res.data.result.length; i++) {
          this.blogViewData.list.push({
            id: res.data.result[i].articleid,
            title: res.data.result[i].title,
            author: res.data.result[i].author,
            views: res.data.result[i].views,
            likes: res.data.result[i].likes,
            comments: res.data.result[i].comments,
            time: res.data.result[i].time
          })
        }
        this.blogPage = res.data.blogPage
      }).catch(err => {
        console.log(err)
      })
    },
    pageChange(page) {
      if(page != this.blogViewData.page) {
        this.isPageControl = false
        this.blogViewData.list = []
        this.blogViewData.page = page
        this.blogNet(page)
      }
    },
    gotoDetail(id, index) {
      const username = this.$store.state.user.username
      viewDetail({id, username}).then(res => {
        this.$store.commit('articleMessage', {
          title: this.blogViewData.list[index].title,
          author: this.blogViewData.list[index].author,
          views: this.blogViewData.list[index].views,
          likes: this.blogViewData.list[index].likes,
          comments: this.blogViewData.list[index].comments,
          time: this.blogViewData.list[index].time,
          isLike: res.data.isLike
        })
      }).catch(err => {
        console.log(err)
      })
      this.$router.push('/main/blog/detail/' + id)
    }
  }
}
</script>

<style scoped>
  .blog {
    margin-left: 220px;
    background: url("~assets/img/main/star.png");
    height: calc(100vh - 65px);
    width: calc(100vw - 220px);
    overflow: auto;
  }
  .item-block {
    width: 800px;
    height: 100px;
    margin-left: 50px;
    padding-left: 20px;
    margin-top: 12px;
    box-sizing: border-box;
    
    background-color: #F5F5F5;
    border-radius: 18px;
    cursor: pointer;

    transition:all ease-in-out .4s;
    -moz-transition: all ease-in-out .4s; /* Firefox 4 */
    -webkit-transition: all ease-in-out .4s; /* Safari 和 Chrome */
    -o-transition: all ease-in-out .4s; /* Opera */
  }
  .item-block:hover {
    transform: translateX(3%);
    background-color: #DCDCDC;
  }
</style>
