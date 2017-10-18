<template>
  <v-container fluid>
    <v-parallax src="/static/collectionBanner.png" height="800">
      <v-layout class="mt-5" justify-start align-center>
        <div class="backgroundText">
          <div>Эту коллекцию очень быстро разбирают</div>
        </div>
      </v-layout>
      <v-layout justify-end align-end>
        <div class="backgroundText idk">
          <div>Узнайте или остался Ваш размер</div>
        </div>
      </v-layout>
      <v-layout align-center justify-end>
        <v-flex xs12 sm6 lg4>
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

<style scoped lang="stylus">
.idk
  min-width 630px

.container
  margin-top -1rem

</style>