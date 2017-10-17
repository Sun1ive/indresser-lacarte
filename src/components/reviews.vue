<template>
  <v-container fluid>
    <v-layout>
      <img src="/static/banner5.png" alt="banner5">
      <div class="backgroundText"><span>Что говорят девушки, которые уже получили нашу одежду?</span></div>
      <div class="reviews">
        <v-flex xs12 lg4 class="review">Удобная одежда, которая одновременно подойдет для работы и для вечерних прогулок</v-flex>
        <v-flex xs12 lg4 class="review">Удобная одежда, которая одновременно подойдет для работы и для вечерних прогулок</v-flex>
        <v-flex xs12 lg4 class="review">Удобная одежда, которая одновременно подойдет для работы и для вечерних прогулок</v-flex>
      </div>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.layout
  position relative
  img
    width 100%
    max-height 700px
  .backgroundText
    position absolute
    left 50%
    top 30%
    transform translate(-50%,-50%)
  
.reviews
  background-color #fff
  height 200px
  position absolute
  width 100%
  bottom 0
  transition .4s ease
  display flex
  justify-content space-around
  align-items center
  &:hover
    height 250px

.review
  margin 0 1.5rem
  background-color #F3AF20
  padding: 2rem
  box-shadow 0px 0px 5px 5px #F3AF20
  position relative
  &:before
    position absolute
    content ""
    bottom -25px
    left 25px
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 25px 55px 0 25px;
    border-color: #F3AF20 transparent transparent transparent;
</style>