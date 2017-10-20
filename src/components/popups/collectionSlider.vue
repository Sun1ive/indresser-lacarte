<template>
  <v-dialog ref="dialog" v-model="sliderDialog" persistent max-width="85vh">
    <v-card>
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
    },
    mounted () {
      console.log(this.$refs.dialog.$refs.dialog);
      let dialog = this.$refs.dialog.$refs.dialog
      dialog.style.boxShadow = '0px 0px 5px 5px #c0c0c0'
    }
  }
</script>

<style scoped lang="stylus">
.carousel
  height 80vh
</style>