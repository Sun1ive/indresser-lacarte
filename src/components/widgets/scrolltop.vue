<template>
  <div class="scrollTop" @click="scrollTop"></div>
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
  background-color #fff
  position fixed
  left 30px
  bottom 10px
  border-radius 50%
  border 1px solid rgba(0,0,0,.5)
  cursor pointer
  transition .4s ease all
  &:hover
    background-color #000
    color #fff
  &:after
    position absolute
    content '\2B06'
    top 50%
    left 50%
    font-size 2rem
    transform translate(-50%,-50%)
</style>