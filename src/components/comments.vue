<template>
  <v-container fluid class="bg">
 <!--    <v-layout column wrap align-center>
      <v-flex class="flexed mt-5 mb-0">
        <div class="backgroundText text-xs-center">
          <div>Почему эта коллекция практически распродана?</div>          
        </div>
      </v-flex>
      <v-flex class="flexed">
        <div class="avatar">
          <img src="/static/oks.png" alt="Oksana">
        </div>
      </v-flex>
      <v-flex class="flexed my-0">
        <div class="data text-lg-right">
          <h3 class="mb-0">Оксана</h3>
          <p class="mb-0">Руководитель проекта</p>
          <p class="mb-3">г. Винница</p>
        </div>
      </v-flex>
      <v-flex class="content">
          <div>Мы собрали команду молодых дизайнеров, которые предлагают нашим клиентам экслюзивную, модную, удобную, качественную одежду. А с учетом собственной реализации мы предлагаем отличные цены. Наши постоянные клиенты будут приятно удивлены.</div>
          <p>Мой вам совет.</p>
          <v-btn class="myBtn" v-scroll-to="'.ez'">Закажите платье сейчас</v-btn>
      </v-flex>
    </v-layout> -->
    <v-layout align-center justify-end>
      <v-flex xs12 sm10 md8 lg6 class="flexed">
        <div class="text">
          <div class="OksanaInfo">
            <h3>Оксана</h3>
            <div>Руководитель проекта</div>
          </div>
          <div class="avatar">
            <img src="/static/oks.png" alt="oksana">
          </div>
        </div>
        <div class="textContainer">
          <p align="justify">Мы собрали команду молодых дизайнеров, которые предлагают нашим клиентам экслюзивную, модную, удобную, качественную одежду. А с учетом собственной реализации мы предлагаем отличные цены. Наши постоянные клиенты будут приятно удивлены.</p>
          <p>Мой вам совет.</p>
          <v-btn class="myBtnRed" v-scroll-to="'.ez'">Закажите платье сейчас</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped lang="stylus">
.bg
  background-image url('/static/birkanew.jpg')
  min-height 1000px
  background-size cover
  .flexed
    display flex
    flex-flow column wrap
    align-items center
    justify-content center
    min-height 1000px
    .text
      display flex
      justify-content center
      align-items center
      .avatar
        width: 300px
        height 300px
        margin-left 3rem
        img
          width 100%
          border-radius 50%
    .textContainer
      background-color #F3B020
      box-shadow 0px 0px 5px 5px #F3B020
      padding 1rem
      margin 2rem 0
      width 80%
      text-align center
      p
        font-size 1.3rem

.OksanaInfo
  color #fff
  font-size 2rem



@media (max-width 620px)
  .flexed
    .text
      flex-direction column
      .avatar
        margin-left 0










/* 
.container
  background-image url('/static/birkabanner.png')
  background-size cover
  min-height 800px
  .flexed
    display flex
    align-items center
    justify-content center
    margin 2rem 0
    .avatar
      width: 300px
      height 300px
      img
        width 100%
        border-radius 50%
  .data
    color #fff
    h3
      font-weight bolder
      font-size 2rem
      margin 2rem 0
    p
      font-size 1.2rem
      padding-bottom .5rem
  .content
    min-height 100px
    width 100%
    max-width 500px
    padding 1rem 0
    text-align center
    background-color #F3B020
    box-shadow 0px 0px 5px 7px #F3B020
    font-size 1.3rem
    line-height 2rem
    font-weight bolder
    color #fff
    border-radius 6px

.myBtn
  background-color rgba(255,0,0,0.8) !important
  box-shadow 0px 0px 3px 3px rgba(255,0,0,0.7)
 */
</style>
