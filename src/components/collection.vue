<template>
  <v-container fluid grid-list-lg>
    <v-layout justify-center align-center>
      <div class="backgroundText mt-5 mb-3"><div>Получить свой заказ очень просто:</div></div>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <v-flex class="cont" xs12 sm6 md4 lg2 v-for="(item,i) in terms" :key="i">
        <img :src="item.img" :alt="i">
        <p>{{ item.title }}</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="gallery">
      <v-flex xs12 sm6 md4 lg3 v-for="(item, i) in collection" :key="i">
        <v-card>
          <v-card-media :src="item.img" height="600"></v-card-media>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.price }} грн</v-card-text>
          <v-card-actions>
            <v-btn class="redd">Заказать</v-btn>
            <v-btn class="ml-0 redd">Подробно</v-btn>
            <!-- <v-btn class="ml-0 orangee">Подробно</v-btn> -->
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
          { title: 'Выберите платье', img: '/static/icons/1.png' },
          { title: 'Оставьте заявку', img: '/static/icons/2.png' },
          { title: 'Укажите адресс доставки', img: '/static/icons/3.png' },
          { title: 'Получите свой заказ', img: '/static/icons/4.png' },
          { title: 'Наслаждайтесь покупкой', img: '/static/icons/5.png' },
          { title: 'Наслаждайтесь покупкой', img: '/static/icons/6.png' },
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
.container
  box-shadow inset 0px 0px 5px 2px #333
  .gallery
    max-width 1600px
    margin 0 auto !important
    padding-bottom 3rem

.cont
  display flex
  align-items center
  justify-content center
  flex-flow column wrap
  p
    font-size 1.3rem

.redd
  background-color rgba(255,0,0, .9) !important
  color #fff
  box-shadow 0px 0px 5px 1px rgba(255,0,0, .9)
  margin-right 1rem
  font-weight bold

.card__actions
  justify-content center

.gallery
  .card
    // background url('/static/grunde.png') center center repeat
    background #F3B020 center center repeat
    &__title
      justify-content center
      font-weight bold
      text-transform uppercase
      font-size 2rem
    &__text
      text-align center
      font-weight bold
      font-size 2rem
      padding 0
</style>