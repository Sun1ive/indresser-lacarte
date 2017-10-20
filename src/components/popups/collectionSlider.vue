<template>
  <v-card style="border-radius: 6px">
    <v-card-title class="popupTitle">{{ collectionItem.title }}<v-spacer></v-spacer>
        <span class="valute">{{ collectionItem.price }} грн</span></v-card-title>
      <v-card-text>
        <v-layout>
          <v-flex xs12 class="text-xs-left">
            <p align="justify">{{collectionItem.desc }}</p>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-btn style="border-radius: 6px;" @click.stop="showOrder(collectionItem)" class="redBtn ml-0">Оформить заказ</v-btn>
        <v-btn style="border-radius: 6px;" @click.stop="popupData = false" class="white--text grey darken-4">Закрыть</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">

</style>