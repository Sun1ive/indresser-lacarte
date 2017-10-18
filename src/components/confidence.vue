<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="conf">
        <div class="iconBackground">
          <v-icon>verified_user</v-icon>
        </div>
        <div class="backgroundText">
          <div>Наши киленты <span class="darken">Уверенны в inDresser</span></div>
        </div>
        <div class="red--text">Если Вам не подошел наш товар <br> мы гарантируем Вам обмен или возврат</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped lang="stylus">
.conf
  display flex
  flex-flow column wrap
  align-items center
  justify-content center
  min-height 500px

.iconBackground
  position relative
  .icon
    position absolute
    top 10%
    left 40%
    font-size 8rem
    color rgba(255,0,0, .9)

.backgroundText
  margin 3rem 0

.red--text
  font-size 2rem
  text-align center
  font-weight bold
  line-height 1.9rem
</style>