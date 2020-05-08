<template>
  <div>
    <slot name="tip"></slot>
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>