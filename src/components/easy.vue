<template>
  <v-container>
    <v-layout justify-center align-center>
      <div class="backgroundText my-5"><div>Получить свой заказ очень просто:</div></div>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <v-flex class="cont text-xs-center" xs12 sm6 md4 lg2 v-for="(item,i) in terms" :key="i">
        <img :src="item.img" :alt="i">
        <p class="mb-0">{{ item.one }}</p>
        <p>{{ item.two }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        terms: [
          { one: 'Выберите', two: 'платье', img: '/static/icons/1.png' },
          { one: 'Оставьте', two: 'заявку', img: '/static/icons/2.png' },
          { one: 'Укажите', two: 'адресс доставки', img: '/static/icons/3.png' },
          { one: 'Получите', two: 'свой заказ', img: '/static/icons/4.png' },
          { one: 'Наслаждайтесь', two: 'покупкой', img: '/static/icons/5.png' },
          { one: 'Заказывайте', two: 'снова', img: '/static/icons/6.png' },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
.cont
  display flex
  align-items center
  justify-content center
  flex-flow column wrap
  p
    font-size 1.3rem
  img
    width 162px
    height 194px
</style>