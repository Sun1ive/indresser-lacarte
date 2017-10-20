<template>
  <v-container fluid>
    <v-form class="Form" method="POST" action="/static/mail.php">
      <v-text-field required name="user_name" label="Укажите Ваш имя"></v-text-field>
      <v-text-field required name="user_email" label="email"></v-text-field>
      <v-btn class="myBtnRed ml-0">Получить каталог</v-btn>
      <v-btn @click="closeForm" class="myBtnRed">Закрыть</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    methods: {
      closeForm () {
        this.$store.commit('closeCatalog')
      }
    }
  }
</script>

<style scoped lang="stylus">
</style>