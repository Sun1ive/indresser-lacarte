<template>
  <header>
    <v-navigation-drawer right temporary hide-overlay v-model="drawer">
      <v-list class="pa-1">
        <v-list-tile avatar class="text-xs-center">
          <img src="/static/logo1.png">
        </v-list-tile>
      </v-list>
      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-tile v-for="item in toolbarMenu" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon medium class="red--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click.stop="drawer = false" v-scroll-to="item.scrollTo">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon medium class="red--text">menu</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click.stop="drawer = false">
            <v-list-tile-title>Свернуть</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :fixed="isFixed">
      <v-toolbar-title @click="scrollTop">
        <img style="width: 100%" class="logo" src="/static/logo1.png" alt="logo">
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn class="request hidden-sm-and-down" @click.stop="showForm">Получить весь каталог коллекции</v-btn>
      <v-spacer></v-spacer>
       <a class="hidden-xs-only" href="tel:380680202090">+38(068)0202090</a>
      <v-spacer></v-spacer>
      <div class="text hidden-sm-and-down">Меню</div>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
    methods: {
      scrollTop () {
        window.scrollTo(0, 0)
      },
      test () {
        let toolbar = document.querySelector('.toolbar')
        let offset = window.pageYOffset

        if (offset >= 250 && !toolbar.classList.contains('fixed')) {
          toolbar.classList.remove('notFixed')
          toolbar.classList.add('fixed')
          console.log('123');
        } else if (offset <= 250 && toolbar.classList.contains('fixed')) {
          toolbar.classList.remove('fixed')
          toolbar.classList.add('notFixed')
          console.log('234');
        }
      },
      showForm () {
        this.$store.commit('showCatalog')
      }
    },
    computed: {
      toolbarMenu () {
        return this.$store.state.menu
      },
      isFixed () {
        return this.$store.state.fixed
      }
    },
    created () {
      window.addEventListener('scroll', this.test)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.test)
    }
  }
</script>

<style scoped lang="stylus">
.request
  background-color rgba(255,0,0,.8) !important
  box-shadow 0px 0px 3px 3px rgba(255,0,0,.7)
  color #fff !important

a
  color #fff
  font-size 1.3rem

.text
  font-size 1.3rem

.btn--icon
  width 48px
  height 48px

.btn .btn__content .icon
  font-size 3rem

.list__tile__title
  font-size 1.3rem

.fixed
  position fixed
  top 0
  opacity .7
  animation fade
  animation-duration 1s
  transition .4s ease
  &:hover
    opacity 1

@keyframes fade {
  from {
    opacity 0
  } to {
    opacity .7
  }
}
</style>