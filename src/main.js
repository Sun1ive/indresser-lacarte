import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VTextField,
  VForm,
  VParallax,
  VDivider,
  VDialog,
  VCarousel,
  VSelect
} from 'vuetify'
import Scroll from 'vue-scrollto'
import { store } from './store'
// import Carousel from 'vue-carousel-3d'
import './stylus/main.styl'
import App from './App.vue'


// Vue.use(Carousel)
Vue.use(Scroll, {
  container: 'body',
  duration: 500,
  offset: 0,
  cancelable: true,
  easing: 'ease'
})
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VTextField,
    VForm,
    VParallax,
    VDivider,
    VDialog,
    VCarousel,
    VSelect
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
