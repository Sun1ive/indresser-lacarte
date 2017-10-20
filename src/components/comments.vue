<template>
  <v-container fluid class="bg">
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
</style>
