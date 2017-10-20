<template>
  <v-container fluid>
    <v-dialog class="Dialog" v-model="dialog" max-width="400">
      <app-form></app-form>
    </v-dialog>
  </v-container>
</template>

<script>
import form from '../form'
export default {
  components: {
    'app-form': form
  },
  computed: {
    dialog () {
      return this.$store.state.catalogDialog
    }
  }
}
</script>

<style scoped lang="stylus"></style>