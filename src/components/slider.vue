<template>
  <v-container fluid>
    <v-layout row wrap justify-center align-center>
      <div class="backgroundText">
        <div>
          <span class="darken">Знакомтесь</span> с новым брендом качественной одежды <span class="darken">inDresser</span>
        </div>
      </div>
    </v-layout>
    <v-layout justify-center align-center class="carouselContainer">
      <carousel-3d
      autoplay
      :autoplayTimeout="4000"
      :autoplayHoverPause="true"
      :width="450"
      :height="600"
      controlsVisible
      :border="0"
      :clickable="false">
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
.container
  background-color #F3AF20
  padding: 4rem 0

.backgroundText
  margin-bottom  3rem
  text-align center

.carouselContainer
  min-height 600px

.carousel-3d-container
  margin 0
  background-color #F3AF20
  padding: 2rem 0
  height: 650px !important


.carousel-3d-slide
  border-radius 10px
  box-shadow 0 0 15px 1px #333

@media (max-width: 600px)
  .backgroundText
    text-align center

</style>