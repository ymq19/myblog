<template>
  <div class="comments">
    <transition name="fade">
      <toast-wrong tip="输入不能为空" class="toast-wrong" v-if="isWrong"/>
    </transition>
    <div class="comments-post">
    <form @submit.prevent="submit">
      <textarea type="text" placeholder="说点什么吧......" v-model="txt" />
      <button type="submit">发布</button>
    </form>
    </div>
    <div class="comments-view">
      全部评论 {{ totalComment }}
    </div>
    <div v-for="(item, index) in commentList" :key="index" class="comment-list">
      <div><img src="~assets/img/main/author.svg" alt="作者" class="author">{{ item.username }}：</div>
      <span class="comment">{{ item.comment }}</span>
      <span class="time">{{ item.time }}</span>
    </div>
    <page-control :blogPage="totalPage" @page-change="pageChange"/>
  </div>
</template>

<script>
import qs from 'querystring'
import { formatDate } from 'common/timeTranslate'
import { commentDetail } from 'network/commentDetail'
import { addComment } from 'network/addComment'
import PageControl from 'components/common/pageControl/PageControl'
import ToastWrong from 'components/common/toast/ToastWrong'
export default {
  name: 'Comments',
  data() {
    return {
      txt: '',
      commentList: [],
      currentPage: 1,
      totalPage: 0,
      totalComment: 0,
      isWrong: false
    }
  },
  components: {
    PageControl,
    ToastWrong
  },
  computed: {
  },
  created() {
    this.getCommentList(this.currentPage)
  },
  methods: {
    getCommentList(page) {
      // 展示评论
      const articleid = this.$route.params.id
      const data = qs.stringify({articleid, page})
      commentDetail(data).then(res => {
        console.log(res)
        for(let i = 0; i < res.data.result.length; i++) {
          this.commentList.push({
            username: res.data.result[i].username,
            comment: res.data.result[i].comment,
            time: res.data.result[i].time
          })
        }
        this.totalPage = res.data.totalPage
        this.totalComment = res.data.totalComment
      }).catch(err => {
        console.log(err)
      })
    },
    submit() {
      // 提交评论
      if(this.txt == '') {
        this.isWrong = true
        setTimeout(() => {
          this.isWrong = false
        }, 2000)
        return
      }
      const articleid = this.$route.params.id
      const username = this.$store.state.user.username
      const comment = this.txt
      const time = formatDate(new Date())
      const data = qs.stringify({articleid, username, comment, time})
      addComment(data).then(res => {
        // this.getCommentList()
        // 数组头部添加评论
        this.commentList.unshift({
          username,
          comment,
          time
        })
        this.totalComment++
        if(this.commentList.length > 10) {
          if(this.totalComment % 10 === 1) {
            this.totalPage++
          }
          this.commentList.pop()
        }
        this.txt = ''
        this.$emit('addComment')
      }).catch(err => {
        console.log(err)
      })
    },
    pageChange(page) {
      if(this.currentPage != page) {
        this.commentList = []
        this.currentPage = page
        this.getCommentList(page)
      }
    }
  }
}
</script>

<style scoped>
  .comments {
    background-color: #FCFCFC;
    border-radius: 5px;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }
  .comments-post {
    text-align: center;
  }
  textarea {
    box-sizing: border-box;
    width: 50%;
    height: 30px;
    padding-top: 2px;
    padding-left: 10px;
    margin: 5px 0;
    border: 1px #cfd4db solid;
    border-radius: 5px;
    resize: none;
    
    transition: height ease-in-out .3s;
    -moz-transition: height ease-in-out .4s; /* Firefox 4 */
    -webkit-transition: height ease-in-out .4s; /* Safari 和 Chrome */
    -o-transition: height ease-in-out .4s; /* Opera */
  }
  textarea:focus {
    border-color: #91b4ff;
    height: 60px;
    box-shadow: 0 0 6px #91b4ff;
    outline: none;
  }
  button {
    margin-top: 5px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5%;
    background-color: #ddd;
    transition: ease-in-out .4s;
    -moz-transition: ease-in-out .4s; /* Firefox 4 */
    -webkit-transition: ease-in-out .4s; /* Safari 和 Chrome */
    -o-transition: ease-in-out .4s; /* Opera */
    color: #fff;
  }
  button:hover {
    background-color: #91b4ff;
  }
  button:focus,button:active {
    width: 180px;
    height: 100px;
    outline: none;
    background-image: url("~assets/img/login/loading.gif");
  }
  .comments-view {
    padding: 4px 0;
    margin-bottom: 10px;
    border-left: 5px #91b4ff solid;
    padding-left: 10px;
    font-size: 20px;
  }
  .comment-list {
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 18px;
  }
  .author {
    vertical-align: middle;
    margin-right: 10px;
  }
  .comment {
    color: black;
    margin-left: 32px;
  }
  .time {
    margin-left: 12px;
    font-size: 12px;
  }
  .toast-wrong {
    background-color: #FFE4E1;
    border-radius: 5px;
    padding: 5px 0;
    z-index: 2000;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
