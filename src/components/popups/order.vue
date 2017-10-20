<template>
  <v-dialog persistent max-width='400' v-model="order">
    <v-form class="Form" @submit.prevent="makeOrder">
      <v-text-field  v-model="user.name" label="Укажите Ваше имя"></v-text-field>
      <v-text-field  v-model="user.phone" label="Укажите Ваш телефон"></v-text-field>
      <v-text-field  v-model="user.email" label="Укажите Ваш email"></v-text-field>
      <v-select v-model="user.size" :items="sizes"></v-select>
      <v-btn type="submit" class="myBtnRed ml-0">Отправить заявку</v-btn>
      <v-btn class="myBtnRed" @click="closeOrder">Закрыть</v-btn>
    </v-form>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          name: '',
          phone: '',
          email: '',
          size: null,
          item: '',
          price: ''
        }
      }
    },
    methods: {
      closeOrder () {
        this.user.size = null
        this.$store.commit('closeOrder')
      },
      makeOrder () {
        this.user.item = this.$store.state.currentItem.title
        this.user.price = this.$store.state.currentItem.price
        let order = `Товар: ${this.user.item} Размер:${this.user.size} Цена: ${this.user.price} грн`
        console.log(this.user);
        console.log(order);
        console.log(`
        Имя: ${this.user.name}
        Телефон: ${this.user.phone}
        email: ${this.user.email}
        Товар: ${this.user.item}
        Размер: ${this.user.size}
        Цена: ${this.user.price} грн`);
        this.$store.commit('closeOrder')
      }
    },
    computed: {
      sizes () {
        return this.$store.state.sizes
      },
      order () {
        return this.$store.state.orderForm
      }
    }
  }
</script>

<style scoped lang="stylus">
.form
  padding 2rem
</style>