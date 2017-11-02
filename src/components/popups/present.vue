<template>
  <v-dialog max-width="550" persistent v-model="isVisible">
    <v-form class="Form" @submit.prevent="submit">
      <h2>Первые 100 покупателей получат скидку в 100 грн</h2>
      <v-text-field required v-model="userData.name" label="Укажите Ваше имя"></v-text-field>
      <v-text-field required v-model="userData.phone" label="Укажите Ваш телефон"></v-text-field>
      <v-text-field required v-model="userData.email" label="e-mail"></v-text-field>
      <v-btn type="submit" class="ml-0 myBtnRed">Получить скидку</v-btn>
      <v-btn @click="closeForm" class="myBtnRed">Закрыть</v-btn>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: '',
        email: '',
        phone: '',
      }
    };
  },
  methods: {
    submit() {
      Email.send(
        `coats@indresser.com`,
        'vi290983mal@gmail.com',
        'Заказ на получение скидки с сайта manydresses.indresser.com',
        `Пользователь: ${this.userData.name}, 
        Телефон: ${this.userData.phone}, 
        Почта: ${this.userData.email}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t'
      );

      alert(
        `Спасибо ${this.userData.name} за Ваш заказ, скоро мы свяжемся с Вами.`
      );

      this.userData = {
        name: '',
        email: '',
        phone: '',
      };
      this.$store.commit('hidePresent');
      this.$store.commit('closePresent');
    },
    closeForm() {
      this.$store.commit('closePresent');
    }
  },
  computed: {
    isVisible() {
      return this.$store.state.presentForm;
    }
  }
};
</script>

<style scoped lang="stylus">
.Form {
  h2 {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #fff;
  }
}

@media (max-width 400px)
  .Form
    flex-direction column
    align-items center
    button
      width 100%
      margin-left 0
      margin-top 1rem
</style>