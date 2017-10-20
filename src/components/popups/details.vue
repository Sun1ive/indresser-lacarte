<template>
<v-dialog v-model="details" lazy max-width="400">
  <v-card>
    <v-card-title>{{ currentItem.title }}</v-card-title>
    <v-card-text>{{ currentItem.price }}</v-card-text>
    <v-select :items="sizes" label="Выберите свой размер"></v-select>
    <v-card-actions>
      <v-btn>Узнать наличие тмоего размера</v-btn>
      <v-btn @click="closeDetails">x</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
  export default {
    computed: {
      details () {
        return this.$store.state.detail
      },
      currentItem () {
        return this.$store.state.currentItem
      },
      sizes () {
        return this.$store.state.sizes
      }
    },
    methods: {
      closeDetails () {
        this.$store.commit('closeDetails')
      }
    }
  }
</script>

<style scoped>

</style>