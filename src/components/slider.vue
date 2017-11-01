<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs10 sm9 md7 lg4>
        <div class="backgroundText">
          <div>
            <span class="darken">Знакомтесь</span> с новым брендом качественной одежды <span class="darken">inDresser</span>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center class="carouselContainer">
      <v-flex xs10 sm8 md7 lg6>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in collection" :src="item.img" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      collection () {
        return this.$store.state.collection
      }
    }
  }
</script>

<style scoped lang="stylus">
.container
  background-color #F3AF20
  .layout
    min-height 150px

.carouselContainer
  padding-bottom 3rem
  .carousel
    border-radius 10px
    max-width 500px
    max-height 600px
    width 100%
    margin 0 auto

.carousel__item
  transition 1s ease-in-out
</style>