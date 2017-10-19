<template>
  <v-container fluid>
    <v-layout row wrap justify-center class="my-5">
      <v-flex xs12 sm10 md5 lg3 class="something">Удобная одежда, которая одновременно пойдет для работы и для вечерних прогулок</v-flex>
      <v-flex xs12 sm10 md5 lg3 class="something">Одежда подобного уровня, не всегда есть в шоурумах и бутиках. Люблю ловить на себе взгляды ;)</v-flex>
      <v-flex xs12 sm10 md5 lg3 class="something">Данная одежда подчеркивает мою женственность и выполнена из качественных материалов</v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.something
  display flex
  align-items center
  justify-content center
  min-height 50px
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