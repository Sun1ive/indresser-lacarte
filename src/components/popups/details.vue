<template>
<v-dialog persistent v-model="details" lazy max-width="500">
  <v-card>
    <v-card-actions><v-spacer></v-spacer><v-btn class="close" flat @click="closeDetails">x</v-btn></v-card-actions>
    <v-card-title>{{ currentItem.title }} <v-spacer></v-spacer><span>{{ currentItem.price }} грн</span></v-card-title>
    <v-card-text>{{ currentItem.desc }}</v-card-text>
    <v-select v-model="size" single-line bottom :items="sizes" label="Выберите свой размер"></v-select>
    <v-card-actions>
      <v-btn class="myBtnRed ml-0">Узнать наличие моего размера</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        size: null
      }
    },
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
        this.size = null
      }
    }
  }
</script>

<style scoped lang="stylus">
.dialog
  .card
    padding 1rem 2rem
    background-color #F3B020
    opacity .7
    &__title
      text-transform uppercase
      font-weight bold
      font-size 1.4rem
      padding 1rem 0
    &__text
      font-size 1.3rem
      padding 1rem 0
    &__actions
      justify-content center
      .close
        margin-right -1rem
        margin-top -1rem
</style>