<template>
  <v-container fluid grid-list-lg>
    <v-layout justify-center align-center>
      <div class="backgroundText mt-5 mb-3"><div>Получить свой заказ очень просто:</div></div>
    </v-layout>
<!--     <v-layout justify-center align-center row wrap>
      <v-flex class="text-xs-center tt" xs12 sm6 lg2 v-for="(item, i) in terms" :key="i">
        <div class="box">{{ item.position }}</div><v-icon>trending_flat</v-icon>
        <div class="pt-3">{{ item.title }}</div>
      </v-flex>
    </v-layout> -->
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 lg2 v-for="(item, i) in terms" :key="i">
        <span>{{ item.title }}</span><v-icon>{{ item.icon }}</v-icon>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="gallery">
      <v-flex xs12 sm6 md4 lg2 v-for="(item, i) in collection" :key="i">
        <v-card>
          <v-card-media :src="item.img" height="600"></v-card-media>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.price }} грн</v-card-text>
          <v-card-actions>
            <v-btn class="ml-0 redd">Заказать</v-btn>
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
          { title: 'Выберите платье', position: 1, icon: 'reply_all' },
          { title: 'Оставьте заявку', position: 2, icon: 'reply_all' },
          { title: 'Укажите адресс доставки', position: 3, icon: 'reply_all' },
          { title: 'Получите свой заказ', position: 4, icon: 'reply_all' },
          { title: 'Наслаждайтесь покупкой', position: 5, icon: 'star' },
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
  margin-bottom 3rem

.redd
  background-color rgba(255,0,0, .9) !important
  color #fff
  box-shadow 0px 0px 1px 1px rgba(255,0,0, .9)
  margin-right 1rem
.orangee
  background-color #F3B020 !important
  color #fff
  box-shadow 0px 0px 1px 1px #F3B020

.card__actions
  justify-content center

.tt
  display flex
  justify-content center
  align-items center
  font-size 2rem
  line-height 3rem
  font-weight bold
  color #A7A7A7
  .box
    width 115px
    height 115px
    border-radius 50%
    display flex
    justify-content center
    align-items center
    background-color #F3B020
    font-size 3rem
    color #fff
    position relative
    overflow hidden
  .icon
    font-size 8rem
    text-align center
    transform rotateY(180deg)
    color #F3B020

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