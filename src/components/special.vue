<template>
  <v-container fluid>
    <v-parallax src="/static/special.png" height="850">
      <v-layout row wrap justify-end align-center>
        <v-flex xs12 sm6 lg4 class="text-xs-center">
          <div class="backgroundText">
            <div>Узнайте о специальном предложении</div>
          </div>
          <div class="border"></div>
          <div class="text"><span>Мы доставим Ваш заказ Вам в офис или по месту проживания</span></div>
          <v-form class="form text-xs-right" @submit.prevent="submit">
            <v-text-field required v-model="userData.name" label="Укажите Ваше имя"></v-text-field>
            <v-text-field required v-model="userData.email" label="e-mail"></v-text-field>
            <v-btn type="submit" class="ml-0 myBtn">Получить каталог</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-container>
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
      Email.send(
      `coats@indresser.com`,
      'sunliveua@gmail.com',
      'Заказ каталога с сайта orange.indresser.com',
      `Пользователь: ${this.userData.name}
      Почта: ${this.userData.email}`,
      'mail.adm.tools',
      'coats@indresser.com',
      '3DLao3x1AC8t');

      alert(`Спасибо ${this.userData.name} за Ваш заказ, скоро мы свяжемся с Вами.`)

      this.userData = {
        name: '',
        email: '',
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.layout
  max-width 1280px
  margin 0 auto
  width 100%

.text
  font-size 1.2rem
  color #a7a7a7
  margin-bottom 2rem
</style>