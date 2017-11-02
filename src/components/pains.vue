<template>
  <v-container fluid class="pain">
    <v-layout align-center justify-center class="pt-3">
      <v-flex xs10 sm10 md10 class="flexBox">
        <div class="iconBackground">
          <img class="imgIcon" src="/static/girl.png" alt="girlicon">
        </div>
        <div class="backgroundText">
          <div>
            <span class="darken">Понимаешь в моде,</span> но <span class="darken">не имеешь много времени</span> на шоппинг?
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-end align-center class="pt-3">
      <v-flex xs10 sm10 md10 class="flexBox">
        <div class="iconBackground">
          <img class="imgIcon two" src="/static/money.png" alt="money">
        </div>
        <div class="backgroundText">
          <div>
            <span class="darken">Самостоятельно зарабатываешь</span> и <span class="darken">ценишь каждую заработанную гривну</span>?
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.pain
  min-height 400px
  .layout
    min-height 200px
  .flexBox
    display flex
    align-items center
    .backgroundText
      margin-left 3rem
  .imgIcon
    position absolute
    top -15%
    right -25%
    max-width 100px
    max-height 150px
    width 100%

@media (max-width 1300px)
  .pain
    .layout
      justify-content center

// @media (max-width 1100px)
  

@media (max-width 700px)
  .pain
    .flexBox
      flex-direction column
      margin 1rem 0
      .backgroundText
        margin-left 0
        margin-top 2rem
        div
          font-size 1rem
          text-align center
    .imgIcon
      min-width 70px
      min-height 130px
</style>