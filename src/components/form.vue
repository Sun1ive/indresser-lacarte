<template>
  <v-container fluid>
    <v-form class="Form" @submit.prevent="submit">
      <v-text-field required v-model="userData.name" label="Укажите Ваше имя"></v-text-field>
      <v-text-field required v-model="userData.email" label="e-mail"></v-text-field>
      <v-btn type="submit" class="ml-0 myBtnRed">Получить каталог</v-btn>
      <v-btn @click="closeForm" class="myBtnRed">Закрыть</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    submit() {
      Email.send(
        `coats@indresser.com`,
        'info@indresser.com',
        'Заказ каталога с сайта orange.indresser.com',
        `Пользователь: ${this.userData.name}
        Почта: ${this.userData.email}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t'
      );

      alert(`Спасибо ${this.userData.name} за Ваш заказ, скоро мы свяжемся с Вами.`);

      this.userData = {
        name: '',
        email: ''
      };
      this.$store.commit('closeCatalog');
    },
    closeForm() {
      this.$store.commit('closeCatalog');
    }
  }
};
</script>

<style scoped lang="stylus">
</style>