<template>
  <v-container fluid>
    <v-layout justify-center align-center class="carouselContainer">
      <carousel-3d autoplay :autoplayTimeout="5000" autoplayHoverPause :width="450" :height="630" :border="0">
        <slide :index="i" v-for="(item, i) in collection" :key="i">
          <img :src="item.img" :alt="item.title">
        </slide>
      </carousel-3d>
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
.carouselContainer
  min-height 600px

.carousel-3d-container
  margin 0
  background-color #F3AF20


.carousel-3d-slide
  border-radius 10px


</style>