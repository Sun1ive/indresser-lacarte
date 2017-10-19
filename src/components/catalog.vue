<template>
  <v-container fluid>
    <v-parallax src="/static/banner2.png" height="600">
      <v-layout align-center justify-start>
        <v-flex xs12 sm6 lg4 class="text-xs-center">
          <div class="backgroundText">
            <div>Получи каталог стильной коллекции</div>
          </div>
          <div class="border"></div>
          <div class="text">Мы предоставим Вам перечень дизайнерской одежды</div>
          <v-form class="form text-xs-right" action="/static/mail.php" method="POST">
            <v-text-field required name="user_name" label="Укажите Ваше имя"></v-text-field>
            <v-text-field required name="user_phone" label="Укажите Ваш телефон"></v-text-field>
            <v-text-field required name="user_email" label="e-mail"></v-text-field>
            <v-btn type="submit" class="ml-0 myBtn">Получить каталог</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
  export default {
    // some code
  }
</script>

<style scoped lang="stylus">
.text
  font-size 1.3rem
  color #a7a7a7
  margin-bottom 2rem

.border
  margin-top 1.5rem
</style>