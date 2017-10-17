<template>
  <v-container fluid>
    <v-parallax src="/static/special.png" height="500">
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 lg4 class="text-xs-center">
          <div class="capital"><span>Узнайте о специальном предложении</span></div>
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

</style>