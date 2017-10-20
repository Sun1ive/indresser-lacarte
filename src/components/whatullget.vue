<template>
  <v-container fluid>
    <v-parallax src="/static/banner5.png" height="700">
      <v-layout row wrap justify-center align-end>
        <div class="backgroundText text-xs-center">
          <div>Что говорят девушки, которые уже получили нашу одежду?</div>
        </div>
      </v-layout>
      <v-layout row wrap justify-center align-end>
        <v-flex xs12 sm10 md5 lg3 class="something">Удобная одежда, которая одновременно пойдет для работы и для вечерних прогулок</v-flex>
        <v-flex xs12 sm10 md5 lg3 class="something">Одежда подобного уровня, не всегда есть в шоурумах и бутиках. Люблю ловить на себе взгляды ;)</v-flex>
        <v-flex xs12 sm10 md5 lg3 class="something">Данная одежда подчеркивает мою женственность и выполнена из качественных материалов</v-flex>
      </v-layout>
    </v-parallax>
  </v-container>
</template>


<style lang="stylus" scoped>
.backgroundText
  margin-bottom 6rem

.something
  display flex
  align-items center
  justify-content center
  min-height 150px
  margin 3rem
  padding 1rem
  background-color #F5BA13
  box-shadow 0px 0px 7px 5px #F5BA13
  border-radius 8px
  font-weight bolder
  font-size 1.4rem
  text-align center
  color #fff
</style>
