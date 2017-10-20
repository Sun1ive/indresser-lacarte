<template>
  <v-dialog persistent max-width='400' v-model="order">
    <v-form>
      <v-text-field v-model="user.name" required label="Укажите Ваше имя"></v-text-field>
      <v-text-field v-model="user.phone" required label="Укажите Ваш телефон"></v-text-field>
      <v-text-field v-model="user.mail" label="Укажите Ваш email"></v-text-field>
      <v-select :items="sizes"></v-select>
      <v-btn>Оформить</v-btn>
      <v-btn @click="closeOrder">Закрыть</v-btn>
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
          mail: ''
        }
      }
    },
    methods: {
      closeOrder () {
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

</style>