<template>
  <div class="scrollTop" @click="scrollTop">
    <v-icon>keyboard_arrow_up</v-icon>
  </div>
</template>

<script>
  export default {
    methods: {
      scrollTop () {
        let offset = window.pageYOffset
        window.scrollTo(0,0)
      }
  }
}
</script>

<style scoped lang="stylus">
.scrollTop
  width 50px
  height 50px
  position fixed
  left 25px
  bottom 30px
  .icon
    font-size 6rem
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    cursor pointer
    color #c0c0c0
</style>