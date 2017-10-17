<template>
  <v-container fluid>
    <v-parallax src="/static/banner.png" height="700"></v-parallax>
    <v-layout class="textContainer">
      <v-flex xs12>
        <div class="text">
          <div class="avatarBG"></div>
          <div class="backgroundText"><span>Понимаешь в моде, но не имеешь много времени на шоппинг?</span></div>
        </div>
        <div class="text">
          <div class="avatarBG"></div>
          <div class="backgroundText"><span>Понимаешь в моде, но не имеешь много времени на шоппинг?</span></div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.container
  padding 0
  position relative

.textContainer
  background-color #fff
  height 150px
  position absolute
  bottom 0
  left 0
  display flex
  justify-content center
  align-items center
  width 100%
  transition .4s ease
  &:hover
    height 300px
    .text
      margin: 3rem 0

.text
  display flex
  align-items center
  margin 1rem 0
  transition .4s ease
  justify-content center
/*   &:first-child
    margin-left 2rem
  &:last-child
    justify-content center */

.avatarBG
  background-color #F3AF20
  height 60px
  width 60px
  border-radius 50%

.backgroundText
  margin-left 2rem
  min-height 40px
  display flex
  align-items center
  padding 1rem
  background-color #E8E7E7
  box-shadow 0px 0px 5px 5px #E8E7E7
  span
    color #A7A7A7
    font-size 1.3rem
</style>