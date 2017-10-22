<template>
  <div class="present">
    <div class="icon" @click.stop="subscribe"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      subscribe () {
        alert('u got present')
      }
    }
  }
</script>

<style scoped lang='stylus'>
@import url('./../animations/animate.css')

.present
  position: fixed;
  width: 90px;
  height: 90px;
  bottom: 100px;
  right: 30px;
  border-radius: 50%;
  cursor: pointer;
  animation: fadeOut 5s infinite linear both
  &:hover
    animation none

.icon
  position: absolute;
  background-image: url('/static/gift.png')
  width: 64px;
  height: 64px;
  top: 50%;
  left: 50%;
  margin-top: -32px;
  margin-left: -31px;

</style>