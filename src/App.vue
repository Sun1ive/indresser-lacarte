<template>
  <v-app light>
    <!-- app toolbar -->
    <app-toolbar></app-toolbar>
    <!-- app main -->
    <app-main></app-main>
    <!-- app footer -->
    <app-footer></app-footer>

    <!-- modals -->
    <app-catalogModal></app-catalogModal>
    <app-collectionSlider></app-collectionSlider>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'
import footer from './components/footer'
import catalogModal from './components/popups/catalogmodal'
import collectionSlider from './components/popups/collectionSlider'

  export default {
    components: {
      'app-toolbar': toolbar,
      'app-main': main,
      'app-footer': footer,
      'app-catalogModal': catalogModal,
      'app-collectionSlider': collectionSlider
    },
    methods: {
/*       fixed () {
        let offset = window.pageYOffset
        if (offset >= 250 && this.$store.state.fixed === false) {
          this.$store.commit('isFixed')
        } else if (offset < 250 && this.$store.state.fixed === true) {
          this.$store.commit('notFixed')
        }
      } */
    },
    created () {
      // window.addEventListener('scroll', this.fixed)
    },
    beforeDestroy () {
      // window.removeEventListener('scroll', this.fixed)
    }
  }
</script>

<style lang="stylus">
body
  font-family Arial, Helvetica, sans-serif

</style>
