<template>
  <div>
    <slot name="user"></slot>
    <slot name="password"></slot>
    <slot name="password-again"></slot>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'UserMessageInput'
}
</script>

<style scoped>

</style>