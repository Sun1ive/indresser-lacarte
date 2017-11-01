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

    <app-details></app-details>

    <app-order></app-order>

    <app-presentForm></app-presentForm>

    <!-- widgets -->
    <app-scrollTop></app-scrollTop>
    <app-present></app-present>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'
import footer from './components/footer'
import catalogModal from './components/popups/catalogmodal'
import collectionSlider from './components/popups/collectionSlider'
import details from './components/popups/details'
import order from './components/popups/order'
import scrollTop from './components/widgets/scrolltop'
import present from './components/widgets/present'
import presentForm from './components/popups/present'

  export default {
    components: {
      'app-toolbar': toolbar,
      'app-main': main,
      'app-footer': footer,
      'app-catalogModal': catalogModal,
      'app-collectionSlider': collectionSlider,
      'app-details': details,
      'app-order': order,
      'app-scrollTop': scrollTop,
      'app-present': present,
      'app-presentForm': presentForm,
    },
    computed: {
      isActivePhone () {
        return this.$store.state.phoneWidget
      }
    }
  }
</script>

<style lang="stylus">
body
  font-family Arial, Helvetica, sans-serif

</style>
