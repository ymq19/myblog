<template>
  <div class="index clear-fix">
    <div class="about left">
      <transition name="fade">
        <div class="why-blog" v-show="whyBlog">
          <h2><img src="~assets/img/main/question.svg" alt=""><span>为什么要做这个博客</span></h2>
          <p><img src="~assets/img/main/answer.svg" alt=""><span>个人练习使用，希望记录下一些解决问题的博客，记录下前进的每一步</span></p>
        </div>
      </transition>
      <transition name="fade">
        <div class="how-blog" v-show="howBlog">
          <h2><img src="~assets/img/main/question.svg" alt=""><span>怎么做的博客</span></h2>
          <p class="front-pre"><img src="~assets/img/main/answer.svg" alt=""><span>前期相关技术的学习，包括但不限于客户端的HTML，CSS，JavaScript，vue.js，axios和
          服务端node.js的express.js框架和MySQL数据库</span></p>
          <p><img src="~assets/img/main/answer.svg" alt=""><span>后期使用vue-cli4进行项目搭建，划分目录结构及设计网页样式，到最后真正开始写相关的代码</span></p>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="thanks right" v-show="thanks">
        <p>
          <img src="~assets/img/main/thanks.svg" alt="">
          在这里特别感谢李立超老师和王红元老师，其中前期的HTML，CSS和JavaScript学习来自
          B站李立超老师的教学视频，vue.js的学习则来自 B站的王红元老师的教学视频
        </p> <br />
        <p class="web-link">在这里附上相关链接:</p> <br />
        <p class="web-link"><a href="https://www.bilibili.com/video/av21557880?p=24">HTML+CSS</a></p>
        <p class="web-link"><a href="https://www.bilibili.com/video/av74548660?p=134">JavaScript</a></p>
        <p class="web-link"><a href="https://www.bilibili.com/video/BV15741177Eh?p=221">vue.js</a></p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      whyBlog: false,
      howBlog: false,
      thanks: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.whyBlog = true
    }, 300)
    setTimeout(() => {
      this.howBlog = true
    }, 1300)
    setTimeout(() => {
      this.thanks = true
    }, 2300)
  }
}
</script>

<style scoped>
  .index {
    margin-left: 220px;
    height: calc(100vh - 65px);
    width: calc(100vw - 220px);
    overflow: auto;

    background: url("~assets/img/main/star.gif") no-repeat center center ;
  }
  .about, .thanks {
    width: 50%;
  }
  .about h2, .about h2 {
    font-size: 32px;
    margin-bottom: 12px;
  }
  .about p, .thanks p{
    margin-left: 50px;
    font-size: 25px;
  }
  .front-pre {
    margin-bottom: 20px;
  }
  .why-blog {
    margin-bottom: calc((100vh - 65px) / 3)
  }
  .about {
    margin-top: 50px;
  }
  .thanks {
    margin-top: calc((100vh - 65px) / 4)
  }
  .why-blog img, .how-blog img, .thanks img {
    vertical-align: middle;
  }
  .web-link {
    text-align: center;
    margin-bottom: 12px;
  }
  .web-link a:hover {
    border-bottom: 2px #6799FF solid;
  }
  .fade-enter-active {
  transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>
