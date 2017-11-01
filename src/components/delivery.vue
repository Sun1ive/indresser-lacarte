<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs10 class="conf">
        <div class="backgroundText">
          <div>Наши киленты <span class="darken">сами выбирают место доставки</span></div>
        </div>
        <div class="iconBackground">
          <img src="/static/dostavka.png" alt="prochnost" class="icon">
        </div>
        <div class="black--text">inDresser работает по принципу "из цеха в руки", а это означает, что Вы можете заказать доставку себе в офис, квартиру или удобное Вам место</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="stylus" scoped>
@import '../stylus/infoblock.styl'

.iconBackground
  .icon
    width 200px
    left 10%

.conf
  width 100%
  .black--text
    width 40%

// @media (max-width 1500px)
//   .conf
//     .black--text
//       width 60%


// @media (max-width 900px)
//   .black--text
//     font-size 1.2rem

@media (max-width: 600px)
  .conf
    margin 2rem 0
    text-align center
    .black--text
      width 90%
  .red--text
    font-size 1.5rem
</style>
