<template>
  <v-container fluid>
    <app-redborder></app-redborder>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Tv_Vjz6FwfM?rel=0" frameborder="0" allowfullscreen></iframe>
  </v-container>
</template>

<script>
import redborder from './redborder'
  export default {
    components: {
      'app-redborder': redborder
    }
  }
</script>

<style scoped lang="stylus">
iframe
  min-height 80vh
</style>