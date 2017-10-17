<template>
  <footer>
    <v-layout>
      <v-flex xs12 class="Footer">&copy; inDresser {{ new Date().getFullYear() }}</v-flex>
    </v-layout>
  </footer>
</template>


<style scoped lang="stylus">
.Footer
  min-height 50px
  display flex
  align-items center
  color #fff
  font-size 2rem
  justify-content center
  background-color #333
</style>