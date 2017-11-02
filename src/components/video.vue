<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs10>
        <app-redborder></app-redborder>
      </v-flex>
    </v-layout>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Tv_Vjz6FwfM?rel=0" frameborder="0" allowfullscreen></iframe>
    <v-layout justify-center class="mb-1">
      <v-flex xs10>
        <app-redborder></app-redborder>
      </v-flex>
    </v-layout>
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