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
          <v-list-tile-content @click.stop="drawer = false" v-scroll-to="item.scroll">
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
      <v-toolbar-title @click="scrollTop"><img class="logo" src="/static/logo1.png" alt="logo"></v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn flat class="request hidden-xs-only">Получить весь каталог коллекции</v-btn>
      <v-spacer></v-spacer>
       <a href="tel:3336621">+38(068)0202090</a>
      <v-spacer></v-spacer>
      <div class="text">Меню</div>
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
      }
    },
    computed: {
      toolbarMenu () {
        return this.$store.state.menu
      },
      isFixed () {
        return this.$store.state.fixed
      }
    }
  }
</script>

<style scoped lang="stylus">
.request
  background-color red !important
  color #fff !important
  border-radius 6px
  font-weight bold

a
  color #fff
  font-size 2rem

.text
  font-weight bolder
  font-size 2rem

.btn--icon
  width 48px
  height 48px

.btn .btn__content .icon
  font-size 3rem
</style>