<template>
  <v-container fluid>
    <app-border></app-border>
    <v-parallax src="/static/collectionBanner.png" height="800">
      <v-layout class="mt-5" justify-start align-center>
        <div class="backgroundText text-xs-center">
          <div>Эту коллекцию очень быстро разбирают</div>
        </div>
      </v-layout>
      <v-layout align-center justify-end>
        <v-flex xs12 sm6 lg3>
          <div class="backgroundText idk text-xs-center">
            <div>Узнайте или остался Ваш размер</div>
          </div>
          <div class="border"></div>
          <v-form class="form text-xs-right">
            <v-text-field label="Ваше имя"></v-text-field>
            <v-text-field label="Ваш телефон"></v-text-field>
            <v-text-field label="Ваш e-mail"></v-text-field>
            <v-btn type="submit" class="ml-0 myBtn">Получить каталог</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-parallax>
    <app-border class="marginTop"></app-border>
  </v-container>
</template>

<script>
import border from './redborder'

export default {
  components: {
    'app-border': border
  }
}
</script>

<style scoped lang="stylus">
.border
  margin 2rem 0

.container
  margin-top -1rem

@media (max-width: 600px)
  .idk
    min-width 300px
  .layout
    justify-content center

</style>