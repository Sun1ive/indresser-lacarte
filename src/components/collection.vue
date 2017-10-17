<template>
  <v-container fluid grid-list-md>
    <v-layout justify-center align-center>
      <div class="backgroundText mb-4"><span>Получить свой заказ очень просто:</span></div>
    </v-layout>
    <v-layout justify-center align-center row wrap>
      <v-flex class="text-xs-center tt" xs12 sm6 lg2 v-for="(item, i) in terms" :key="i">
        <div class="box">{{ item.position }}</div>
        <div class="pt-3">{{ item.title }}</div>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="gallery">
      <v-flex xs12 sm6 md3 lg2 v-for="(item, i) in collection" :key="i">
        <v-card>
          <v-card-media :src="item.img" height="400"></v-card-media>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.price }} грн</v-card-text>
          <v-card-actions>
            <v-btn class="ml-0">Подробно</v-btn>
            <v-btn class="ml-0">Заказать</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        terms: [
          { title: 'Выбери платье', position: 1 },
          { title: 'Оставь заявку', position: 2 },
          { title: 'Укажи адресс доставки', position: 3 },
          { title: 'Получи свой заказ', position: 4 },
          { title: 'Наслаждайся покупкой', position: 5 },
        ]
      }
    },
    computed: {
      collection () {
        return this.$store.state.collection
      }
    }
  }
</script>

<style scoped lang="stylus">
.tt
  display flex
  justify-content center
  flex-direction column
  align-items center
  font-size 2.1rem
  font-weight bold
  color #A7A7A7

.box
  width 100px
  height 100px
  border-radius 50%
  display flex
  justify-content center
  align-items center
  background-color #F3B020
  font-size 3rem
  color #fff
</style>