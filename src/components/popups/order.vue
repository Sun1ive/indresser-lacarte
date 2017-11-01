<template>
  <v-dialog persistent max-width='400' v-model="order">
    <v-form class="Form" @submit.prevent="makeOrder">
      <v-text-field  v-model="user.name" label="Укажите Ваше имя"></v-text-field>
      <v-text-field  v-model="user.phone" label="Укажите Ваш телефон"></v-text-field>
      <v-text-field  v-model="user.email" label="Укажите Ваш email"></v-text-field>
      <v-select v-model="user.size" :items="sizes" label="Выберите размер"></v-select>
      <v-btn type="submit" class="myBtnRed ml-0">Отправить заявку</v-btn>
      <v-btn class="myBtnRed ml-0" @click="closeOrder">Закрыть</v-btn>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        size: null,
        item: '',
        price: '',
        order: '',
      }
    };
  },
  methods: {
    closeOrder() {
      this.user.size = null;
      this.$store.commit('closeOrder');
    },
    makeOrder() {
      this.user.item = this.$store.state.currentItem.title;
      this.user.price = this.$store.state.currentItem.price;
      this.user.order = this.$store.state.currentItem.order;
      let order = `Имя: ${this.user.name}, 
      Телефон: ${this.user.phone}, 
      Почта: ${this.user.email}, 
      Заказал товар: ${this.user.item} ${this.user.order}, 
      Размер: ${this.user.size}, 
      Цена: ${this.user.price} грн`;

      Email.send(
        `info@indresser.com`,
        'sunliveua@gmail.com',
        'Заказ с сайта manydresses.indresser.com',
        `${order}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t'
      );
      alert(`Спасибо ${this.user.name} за Ваш заказ, скоро мы свяжемся с Вами.`);
      this.user = {
        name: '',
        phone: '',
        email: '',
        size: null,
        item: '',
        price: '',
        order: '',
      }
      this.$store.commit('closeOrder');
    }
  },
  computed: {
    sizes() {
      return this.$store.state.sizes;
    },
    order() {
      return this.$store.state.orderForm;
    }
  }
};
</script>

<style scoped lang="stylus">
.Form {
  padding: 2rem;
}

.myBtnRed {
  margin: 1rem;
}

@media (max-width: 600px) {
  .Form {
    display: flex;
    flex-direction: column;
  }

  .myBtnRed {
    margin: 1rem 0;
  }
}
</style>