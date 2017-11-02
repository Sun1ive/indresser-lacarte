<template>
  <v-container fluid>
    <v-parallax src="/static/collectionBanner.png" height="800">
      <v-layout class="mt-5" align-center>
        <v-flex xs10 sm6 lg3>
          <div class="backgroundText text-xs-center">
            <div>Эту коллекцию очень быстро разбирают</div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-end>
        <v-flex xs10 sm6 lg3>
          <div class="backgroundText text-xs-center">
            <div>Узнайте или остался Ваш размер</div>
          </div>
          <div class="border"></div>
          <v-form class="form text-xs-right" @submit.prevent="submit">
            <v-text-field required v-model="userData.name" label="Укажите Ваше имя"></v-text-field>
            <v-text-field required v-model="userData.email" label="e-mail"></v-text-field>
            <v-btn type="submit" class="ml-0 myBtn">Получить каталог</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-parallax>
    <v-layout justify-center>
      <v-flex xs10>
        <app-border></app-border>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import border from './redborder'

export default {
  components: {
    'app-border': border
  },
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
.border
  margin 2rem 0

@media (max-width: 600px)
  .backgroundText
    padding 0
  .layout
    justify-content center

</style>