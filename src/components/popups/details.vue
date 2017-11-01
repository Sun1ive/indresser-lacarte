<template>
<v-dialog persistent v-model="details" lazy max-width="600">
  <v-card>
    <div class="close" @click="closeDetails"></div>
    <v-card-title>{{ currentItem.title }} <v-spacer></v-spacer><span>{{ currentItem.price }} грн</span></v-card-title>
    <v-card-text>{{ currentItem.one }}</v-card-text>
    <v-card-text>{{ currentItem.two }}</v-card-text>
    <v-card-text>{{ currentItem.three }}</v-card-text>
    <v-card-text>{{ currentItem.four }}</v-card-text>
    <v-card-text>{{ currentItem.five }}</v-card-text>
    <v-card-text>{{ currentItem.six }}</v-card-text>
    <v-card-actions class="pt-4">
      <v-btn class="myBtnRed ml-0" @click.stop="showOrder">Узнать наличие моего размера</v-btn>
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
        this.$store.commit('closeDetails');
        this.size = null
      },
      showOrder () {
        this.$store.commit('showOrder');
        this.$store.commit('closeDetails');
      }
    }
  }
</script>

<style scoped lang="stylus">
.dialog
  text-align center
  .card
    padding 2rem
    background-color #F3B020
    opacity .7
    position relative
    .close
      background-image url('/static/close.svg')
      width 30px
      height 30px
      position absolute
      right 2%
      top 3%
      cursor pointer
    &__title
      text-transform uppercase
      font-weight bold
      font-size 1.4rem
      padding 1rem 0
    &__text
      font-size 1.3rem
      padding 0

@media (max-width 420px)
  .myBtnRed
    font-size .8rem
    text-transform auto
  .dialog
    .card__title
      font-size 1.2rem
    .card__text
      font-size 1rem
</style>