<template>
  <v-container fluid>
    <v-parallax src="/static/banner2.png" height="600">
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 lg4 class="text-xs-center">
          <div class="capital"><span>Получи каталог стильной коллекции</span></div>
          <div class="border"></div>
          <div class="text"><span>Мы предоставим Вам перечень дизайнерской одежды</span></div>
          <v-form class="form text-xs-right">
            <v-text-field label="Ваше имя"></v-text-field>
            <v-text-field label="Ваш телефон"></v-text-field>
            <v-text-field label="Ваш e-mail"></v-text-field>
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

<style scoped lang="stylus"></style>