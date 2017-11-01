<template>
  <v-container fluid class="banner">
  </v-container>
</template>

<style scoped lang="stylus">
.banner
  padding 0
  background-image url('/static/banner.png')
  background-size cover
  background-position center 60%
  min-height 600px

@media (max-width 700px)
  .banner
    background-image url('/static/banner700.png')
    min-height 300px
  
</style>