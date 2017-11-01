<template>
  <v-form class="Form" @submit.prevent="submit">
    <v-text-field required v-model="userData.name" label="Укажите Ваше имя"></v-text-field>
    <v-text-field required v-model="userData.email" label="e-mail"></v-text-field>
    <v-btn type="submit" class="ml-0 myBtnRed">Получить каталог</v-btn>
    <v-btn @click="closeForm" class="myBtnRed">Закрыть</v-btn>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        userData: {
          name: '',
          email: ''
        }
      }
    },
    methods: {
      submit () {

      },
      closeForm () {
        
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>