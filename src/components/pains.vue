<template>
  <v-container fluid>
    <v-layout column wrap align-start>
      <v-flex xs12 class="flexContainer">
        <div class="iconBackground">
          <!-- <img class="imgIcon" src="/static/girl.jpg" alt="girlicon"> -->
        </div>
        <div class="backgroundText">
          <div>
            <span class="darken">Понимаешь в моде,</span> но <span class="darken">не имеешь много времени</span> на шоппинг?
          </div>
        </div>
      </v-flex>
      <v-flex xs12 class="flexContainer">
        <div class="iconBackground">
          <!-- <img class="imgIcon" src="/static/girl.jpg" alt="girlicon"> -->
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
  top -50%
  right -10%

.backgroundText
  margin-left 6rem

.flexContainer
  &:first-child
    margin-left 9rem
  &:last-child
    margin-left 18rem
</style>