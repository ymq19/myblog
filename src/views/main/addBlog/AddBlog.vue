<template>
  <div class="add-blog">
    <transition name="fade">
      <toast-wrong tip="标题或内容不能为空" class="toast-wrong" v-if="isWrong" />
    </transition>
    <input type="text" placeholder="输入标题" v-model="title">
    <mavon-editor ref="md" @imgAdd="$imgAdd" @save="saveMavon" v-model="txt" />
  </div>

</template>

<script>
import qs from 'querystring'
import { formatDate } from 'common/timeTranslate'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { addImage } from 'network/addImage'
import { blogView } from 'network/blogView'
import { addBlog }  from 'network/addBlog'
import ToastWrong from 'components/common/toast/ToastWrong'
export default {
  name: 'AddBlog',
  data() {
    return {
      img_file: {},
      title: '',
      isWrong: false,
      txt: ''
    }
  },
  components: {
    mavonEditor,
    ToastWrong
  },
  mounted() {
    
  },
  methods: {
    saveMavon(value, render) {
      if(this.title == '' || value == '') {
        // console.log('标题或内容不能为空')
        this.isWrong = true
        setTimeout(() => {
          this.isWrong = false
        }, 2000)
        return
      }
      // 文章id
      const random = Date.now() + parseInt(Math.random() * 999)
      // 标题
      const title = this.title
      // 作者
      const author = this.$store.state.user.username
      // 浏览量
      const views = '0'
      // 点赞数
      const likes = '0'
      // 评论数
      const comments = '0'
      // 帖子提交时间
      const date = new Date()
      const timeStr = formatDate(date)
      const data = qs.stringify({title, author, views, likes, comments, timeStr, random})
      blogView(data).then(res => {
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
      const mdTxt = qs.stringify({random, title, value})
      addBlog(mdTxt).then(res => {
        // 清空内容
        this.title = ''
        this.txt = ''
      }).catch(err => {
        console.log(err)
      })
    },
    $imgAdd(pos, $file) {
      // 1.将图片上传到服务器
      var formdata = new FormData()
      formdata.append('image', $file)
      addImage(formdata).then(res => {
        // console.log(res)
        // 2.将返回的url替换到文本原位置
        this.$refs.md.$img2Url(pos, res.data.url)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .add-blog {
    margin-left: 220px;
    background: url("~assets/img/main/star.png");
    height: calc(100vh - 65px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  input {
    width: 500px;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: calc((100vw - 220px) / 2);
    border-radius: 5px;
    border: none;
    border: 1px #666 solid;
    padding-left: 10px;
    transform: translateX(-50%);
    -ms-transform:translateX(-50%); /* IE 9 */
    -webkit-transform:translateX(-50%); /* Safari and Chrome */
  }
  input:focus {
    outline: none;
  }
  .toast-wrong {
    background-color: #FFE4E1;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    bottom: 200px;
    left: 220px;
    right: 0;
    z-index: 2000;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
