<template>
  <v-container fluid>
    <v-layout align-center>
      <v-flex xs12 class="flexed">
        <div class="backgroundText mb-5">
          <div>Почему эта коллекция распродана?</div>
        </div>
        <div class="avatar">
          <img src="/static/oks.png" alt="Oksana">
        </div>
        <div class="data text-lg-right">
           <h3 class="mb-0">Оксана</h3>
           <p class="mb-0">Руководитель проекта</p>
           <p class="mb-3">г. Винница</p>
         </div>
        <div class="content">Мы собрали команду молодых дизайнеров, которые предлагают нашим клиентам экслюзивную, модную, удобную, качественную одежду. А с учетом собственной реализации мы предлагаем отличные цены. Наши постоянные клиенты будут приятно удивлены. Рекомендую и Вам убедиться в этом.</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped lang="stylus">
.layout
  background-image url('/static/birka2.jpg')
  min-height 900px

.avatar
  width: 400px
  height 400px
  img
    width 100%
    border-radius 50%

.data
  color #fff
  h3
    font-weight bolder
    font-size 5rem
    margin 2rem 0
  p
    font-size 1.5rem
    padding-bottom .5rem

.flexed
  display flex
  justify-content center
  flex-flow column wrap
  align-items center

.content
  width 50%
  padding 1rem
  text-align center
  background-color #F3B020
  box-shadow 0px 0px 5px 7px #F3B020
  font-size 1.7rem
  line-height 2rem
  font-weight bolder
  color #fff
  border-radius 6px
</style>