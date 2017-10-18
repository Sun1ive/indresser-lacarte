<template>
  <v-container fluid>
    <v-parallax src="/static/special.png" height="850">
      <v-layout row wrap justify-end align-center>
        <v-flex xs12 lg6 class="text-xs-center">
          <div class="backgroundText">
            <div>Узнайте о специальном предложении</div>
          </div>
          <div class="border"></div>
          <div class="text"><span>Мы доставим Ваш заказ Вам в офис или по месту проживания</span></div>
          <v-form class="form text-xs-right">
            <v-text-field label="Ваше имя"></v-text-field>
            <v-text-field label="Ваш телефон"></v-text-field>
            <v-btn type="submit" class="ml-0 myBtn">Получить каталог</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.layout
  max-width 1280px
  margin 0 auto
  width 100%

.text
  font-size 1.2rem
  color #a7a7a7
  margin-bottom 2rem
</style>