<template>
  <div class="profile">
    <div class="profile-msg">
      <tech-stack />
      <Team :teamMember="teamMember" />
      <other-msg />
    </div>
  </div>
</template>

<script>
import TechStack from './childComps/TechStack'
import Team from './childComps/Team'
import OtherMsg from './childComps/OtherMsg'
export default {
  name: 'Profile',
  mounted() {
    
  },
  data() {
    return {
      teamMember: [
        {
          name: '俞苗祺（Alex Yu）',
          msg: '一个大二学生，爱打篮球，学习Vue中，欢迎联系与关注'
        }
      ]
    }
  },
  components: {
    Team,
    TechStack,
    OtherMsg
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .profile {
    margin-left: 220px;
    width: calc(100vw - 220px);
    text-align: center;

    height: calc(100vh - 65px);
    overflow: auto;
  }
  .profile-msg {
    width: 70%;
    background: url("~assets/img/main/star.png");
  }
</style>
