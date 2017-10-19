<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="conf">
        <div class="iconBackground">
          <img src="/static/dostavka.png" alt="prochnost" class="icon">
        </div>
        <div class="backgroundText">
          <div>Наши киленты <span class="darken">сами выбирают место доставки</span></div>
        </div>
        <div class="red--text">inDresser работает по принципу "из цеха в руки", а это <br> означает, что Вы можете заказать доставку себе в офис, <br> квартиру или удобное Вам место</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="stylus" scoped>
@import '../stylus/infoblock.styl'

.icon
  width 200px !important
  top -15% !important

.conf
  width 100%

@media (max-width: 600px)
  .conf
    margin 2rem 0
    text-align center
  .red--text
    font-size 1.5rem
</style>
