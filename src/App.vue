<template>
  <div id="app">
    <nav-bar v-show="isMain" />
    <side-bar v-show="isMain"/>
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <loading v-if="$store.state.isLoading"/>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import SideBar from 'components/content/sidebar/SideBar'
import Loading from 'components/common/loading/Loading'
export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    Loading
  },
  computed: {
    isMain() {
      return this.$store.state.isMain
    }
  }
}
</script>

<style>
  @import 'assets/css/base.css';
  /* .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  } */
</style>
