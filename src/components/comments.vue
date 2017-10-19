<template>
  <v-container fluid>
    <v-layout column wrap align-center>
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
      <v-flex class="flexed content">
          Мы собрали команду молодых дизайнеров, которые предлагают нашим клиентам экслюзивную, модную, удобную, качественную одежду. А с учетом собственной реализации мы предлагаем отличные цены. Наши постоянные клиенты будут приятно удивлены. Рекомендую и Вам убедиться в этом.
      </v-flex>
      <v-btn class="myBtn">Закажите платье сейчас</v-btn>
    </v-layout>
  </v-container>
</template>


<style scoped lang="stylus">
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
  margin-bottom 6rem

</style>