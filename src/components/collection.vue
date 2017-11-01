<template>
  <v-container fluid grid-list-lg>
    <easy></easy>
    <v-layout justify-center class="py-3">
      <div class="backgroundText">
        <div>Самые популярные модели</div>
      </div>
    </v-layout>
    <v-layout justify-center class="py-3">
      <div class="backgroundText">
        <div>Выбери свое платье</div>
      </div>
    </v-layout>
    <v-layout row wrap class="gallery">
      <v-flex xs12 sm6 md4 lg2 v-for="(item, i) in collection" :key="i">
        <v-card>
          <v-card-media :src="item.img" height="500" @click="test(item)"></v-card-media>
          <div class="wrapper">
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.price }} грн</v-card-text>
            <v-card-actions class="text-xs-center">
              <v-btn class="redd ml-3" @click="showDetails(item)">Подробно</v-btn>
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
        this.$store.state.currentItem = item
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
      position relative
      overflow hidden
      box-shadow 0px 0px 5px 2px rgba(#F3B020, .7)

.redd
  background-color rgba(255,0,0, .9) !important
  color #fff
  box-shadow 0px 0px 5px 1px rgba(255,0,0, .9)
  margin-right 1rem


.gallery
  .card
    background-color rgba(#F3B020, .7)
    &__title
      justify-content center
      font-size 1.2rem
      text-align center
      padding 0.5rem
    &__text
      text-align center
      font-size 1.3rem
      font-weight bold
      padding 0
    &__actions
      justify-content center
      text-align center
</style>