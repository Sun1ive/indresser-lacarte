<template>
  <v-container fluid>
    <v-parallax src="/static/banner5.png" height="700">
      <v-layout row wrap justify-center align-end>
        <div class="backgroundText text-xs-center">
          <div>Что говорят девушки, которые уже получили нашу одежду?</div>
        </div>
      </v-layout>
      <v-layout justify-center align-end>
        <carousel-3d
        :width="700"
        :height="200"
        autoplay
        :autoplayTimeout="3000"
        :autoplayHoverPause="true"
        :disable3d="true"
        controlsVisible
        :border="0"
        >
          <slide :index="i" v-for="(item, i) in reviews" :key="i">
            <div class="wrapper">
              <img :src="item.img" :alt="i"><div>{{ item.text }}</div>
            </div>
          </slide>
        </carousel-3d>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      reviews: [
        { img: '/static/11160.png', text: 'Удобная одежда, которая одновременно пойдет для работы и для вечерних прогулок' },
        { img: '/static/11160.png', text: 'Удобная одежда, которая одновременно пойдет для работы и для вечерних прогулок' },
        { img: '/static/11160.png', text: 'Удобная одежда, которая одновременно пойдет для работы и для вечерних прогулок' },
      ]
    }
  }
}

</script>


<style lang="stylus" scoped>
.wrapper
  display flex
  align-items center
  justify-content center
  div
    padding 2rem
    font-size 1.3rem
    background-color #F3B020
    min-height 200px
    display flex
    align-items center
  img
    max-width 200px
    max-height 200px
    width 100%

.carousel-3d-slide
  background-color transparent !important


.something
  background-color #fff

.carousel-3d-container
  max-width 700px
  box-shadow 0 0 5px 5px #F3B020
  margin-bottom 6rem

// <v-layout row wrap justify-center align-end>
//   <v-flex xs12 sm10 md5 lg3 class="something">Удобная одежда, которая одновременно пойдет для работы и для вечерних прогулок</v-flex>
//   <v-flex xs12 sm10 md5 lg3 class="something">Одежда подобного уровня, не всегда есть в шоурумах и бутиках. Люблю ловить на себе взгляды ;)</v-flex>
//   <v-flex xs12 sm10 md5 lg3 class="something">Данная одежда подчеркивает мою женственность и выполнена из качественных материалов</v-flex>
// </v-layout>
</style>
