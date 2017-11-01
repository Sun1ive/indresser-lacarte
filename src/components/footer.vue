<template>
  <footer>
    <v-container fluid class="footer">
      <v-layout column justify-center>
        <v-layout align-center justify-center class="layoutContainer">
          <h3>Остались вопросы?</h3>
        </v-layout>
        <v-layout justify-center align-center class="test layoutContainer">
          <v-flex xs12 sm6 lg2 class="text-xs-center Info">Звоните: 098-02-02-092</v-flex>
          <v-flex xs12 sm6 lg2 class="text-xs-center Info">Пишите: info@indresser.com</v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </footer>
</template>


<style scoped lang="stylus">
.footer
  background-color #000
  color #fff
  min-height 170px
  .Info
    border-bottom 1px solid #fff
    font-size 1.6rem
    margin 0 1rem
    margin-bottom 2rem

@media (max-width 500px)
  .footer
    h3
      font-size 1.4rem
  .test
    flex-direction column
    .Info
      font-size 1.2rem
</style>