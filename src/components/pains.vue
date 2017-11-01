<template>
  <v-container fluid>
    <v-layout column align-center justify-center>
      <v-flex xs11 class="flexContainer text-xs-center">
        <div class="iconBackground">
          <img class="imgIcon" src="/static/girl.png" alt="girlicon">
        </div>
        <div class="backgroundText">
          <div>
            <span class="darken">Понимаешь в моде,</span> но <span class="darken">не имеешь много времени</span> на шоппинг?
          </div>
        </div>
      </v-flex>
      <v-flex xs11 align-center class="flexContainer text-xs-center">
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
.imgIcon
  position absolute
  top -15%
  right -25%
  max-width 100px
  max-height 150px
  width 100%

.two
  top 0
  max-width 150px
  max-height 200px

.backgroundText
  margin-left 6rem
  width 100%

.flexContainer
  width 100%
  display flex
  justify-content flex-start
  &:first-child
    margin-left 3rem
    margin-bottom -1rem
    margin-top 3rem
  &:last-child
    justify-content center
    margin-left 3rem
    margin-top -1rem
    margin-bottom 3rem
</style>