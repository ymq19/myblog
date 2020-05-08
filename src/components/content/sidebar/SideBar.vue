<template>
  <div class="side-bar">
    <div v-for="(item, index) in sideBar" :key="index" @click="itemClick(index)" class="side-bar-link">
      <img :src="item.gray" :alt="item.hint" v-if="!(getCurrentIndex === index)">
      <img :src="item.bright" :alt="item.hint" v-else><br />
      <span :class="{ active: currentIndex === index}">{{ item.hint }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  data() {
    return {
      sideBar: [
        {
          gray: require('assets/img/main/index_gray.svg'),
          bright: require('assets/img/main/index.svg'),
          hint: '首页介绍' 
        },
        {
          gray: require('assets/img/main/account_gray.svg'),
          bright: require('assets/img/main/account.svg'),
          hint: '账号信息' 
        },
        {
          gray: require('assets/img/main/blog_gray.svg'),
          bright: require('assets/img/main/blog.svg'),
          hint: '博客'
        },
        {
          gray: require('assets/img/main/addblog_gray.svg'),
          bright: require('assets/img/main/addblog.svg'),
          hint: '新建博客'
        },
        {
          gray: require('assets/img/main/profile_gray.svg'),
          bright: require('assets/img/main/profile.svg'),
          hint: '关于我们'
        }
      ],
      currentIndex: -1
    }
  },
  computed: {
    getCurrentIndex() {
      if(this.$store.state.url) {
        switch(this.$store.state.url) {
          case '/main/index': 
            this.currentIndex = 0
            break
          case '/main/account': 
            this.currentIndex = 1
            break
          case '/main/blog': 
            this.currentIndex = 2
            break
          case '/main/addblog': 
            this.currentIndex = 3
            break
          case '/main/profile': 
            this.currentIndex = 4
            break
        }
      }
      return this.currentIndex
    }
  },
  components: {
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      switch(index) {
        case 0:
          this.$router.push('/main/index')
          break
        case 1:
          this.$router.push('/main/account')
          break
        case 2:
          this.$router.push('/main/blog')
          break
        case 3:
          this.$router.push('/main/addblog')
          break
        case 4:
          this.$router.push('/main/profile')
          break
      }
    }
  }
}
</script>

<style scoped>
  .side-bar {
    box-sizing: border-box;
    height: calc(100vh - 65px);
    width: 220px;
    border-right: 1px #cfd4db solid; 

    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: column;
    justify-content: space-around;

    text-align: center;
    position: fixed;
    /* overflow: hidden; */
  }
  .side-bar-link{
    cursor: pointer;
  }
  .side-bar-link:hover span {
    padding-bottom: 10px;
    border-bottom: 2px #6799FF solid;
  }
  .active {
    color: #6799FF;
  }
</style>
