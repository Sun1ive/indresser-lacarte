<template>
  <v-dialog v-model="sliderDialog" persistent max-width="400">
    <v-card style="border-radius: 6px">
      <v-carousel hide-controls v-show="sliderDialog">
        <v-carousel-item v-for="(item, i) in slider" :key="i" :src="item" @click="closeSlider"></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    computed: {
      sliderDialog () {
        return this.$store.state.sliderDialog
      },
      slider () {
        return this.$store.state.currentItem.slider
      }
    },
    methods: {
      closeSlider () {
        this.$store.commit('closeCardSlider')
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>