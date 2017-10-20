<template>
  <v-container fluid grid-list-lg>
    <easy></easy>
    <v-layout row wrap class="gallery">
      <v-flex xs12 sm6 md4 lg2 v-for="(item, i) in collection" :key="i">
        <v-card>
          <v-card-media :src="item.img" height="500" @click="test(item)"></v-card-media>
          <div class="wrapper">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.price }} грн</v-card-text>
            <v-card-actions class="text-xs-center">
              <v-btn class="redd" @click="showDetails(item)">Подробно</v-btn>
              <v-btn class="redd ml-2" @click="showOrder(item)">Заказать</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import easy from './easy'
  export default {
    components: {
      easy
    },
    data () {
      return {
        terms: [
          { title: 'Выберите платье', img: '/static/icons/1.png' },
          { title: 'Оставьте заявку', img: '/static/icons/2.png' },
          { title: 'Укажите адресс доставки', img: '/static/icons/3.png' },
          { title: 'Получите свой заказ', img: '/static/icons/4.png' },
          { title: 'Наслаждайтесь покупкой', img: '/static/icons/5.png' },
          { title: 'Наслаждайтесь покупкой', img: '/static/icons/6.png' },
        ]
      }
    },
    methods: {
      test (item) {
        this.$store.state.currentItem = item
        this.$store.commit('showCardSlider')
      },
      showDetails (item) {
        this.$store.state.currentItem = item
        this.$store.commit('showDetails')
      },
      showOrder (item) {
        this.$store.commit('showOrder')
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
.container
  .gallery
    max-width 1600px
    margin 0 auto !important
    padding-bottom 3rem
    .wrapper
      box-shadow 0px 0px 5px 2px #F3B020

.redd
  background-color rgba(255,0,0, .9) !important
  color #fff
  box-shadow 0px 0px 5px 1px rgba(255,0,0, .9)
  margin-right 1rem


.gallery
  .card
    // background url('/static/grunde.png') center center repeat
    background #F3B020 center center repeat
    &__title
      justify-content center
      text-transform uppercase
      font-size 1.3rem
    &__text
      text-align center
      font-size 1.3rem
      padding 0
    &__actions
      justify-content center
</style>