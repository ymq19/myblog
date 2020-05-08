<template>
  <toast :content="tip" class="wrong"> 
    <template v-slot:tip>
      <div><img src="~assets/img/login/wrong.svg" alt="错误"></div>
    </template>
  </toast>
</template>

<script>
import Toast from 'components/common/toast/Toast'
export default {
  name: 'ToastWrong',
  components: {
    Toast
  },
  props: {
    tip: {
      type: String,
      default: '用户名或密码错误'
    }
  }
}
</script>

<style scoped>
  .wrong {
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: center;
    color: red;

    /* position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 0%); */
  }
  img {
    height: 20px;
    margin-right: 5px;
  }
</style>