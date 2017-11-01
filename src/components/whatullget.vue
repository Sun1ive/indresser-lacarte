<template>
  <v-container fluid>
    <v-parallax src="/static/banner5.png" height="700">
      <v-layout row wrap justify-center align-end>
        <div class="backgroundText text-xs-center">
          <div>Что говорят девушки, которые уже получили нашу одежду?</div>
        </div>
      </v-layout>
      <v-layout justify-center align-center>
        <v-carousel hide-controls>
          <v-carousel-item v-for="(item, i) in reviews" :key="i" :src="item.img"></v-carousel-item>
        </v-carousel>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      reviews: [
        { img: '/static/review.png', text: 'Удобная одежда, которая одновременно пойдет для работы и для вечерних прогулок' },
        { img: '/static/review.png', text: 'Одежда подобного уровня, не всегда есть в шоурумах и бутиках. Люблю ловить на себе взгляды ;)' },
        { img: '/static/review.png', text: 'Данная одежда подчеркивает мою женственность и выполнена из качественных материалов' },
      ]
    }
  }
}

</script>


<style lang="stylus" scoped>
.carousel
  height 200px
  max-width 700px
  box-shadow none








</style>
