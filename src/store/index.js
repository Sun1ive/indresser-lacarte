import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menu: [
      { title: 'Вызовы', icon: 'help', scrollTo: '.pains' },
      { title: 'О нас', icon: 'store', scrollTo: '.slider' },
      { title: 'Гарантия', icon: 'verified_user', scrollTo: '.confidence' },
      { title: 'Каталог', icon: 'collections', scrollTo: '.catalog' },
      { title: 'Доставка', icon: 'local_shipping', scrollTo: '.deliver' },
      { title: 'Отзывы', icon: 'question_answer', scrollTo: '.whatullget' },
      { title: 'Видео', icon: 'play_arrow', scrollTo: '.video' },
      { title: 'Заказ каталога', icon: 'email', scrollTo: '.request' },
      { title: 'Все просто', icon: 'touch_app', scrollTo: '.collection' },
      { title: 'Коллекция', icon: 'photo_camera', scrollTo: '.gallery' },
      { title: 'Акция', icon: 'card_giftcard', scrollTo: '.special' }
    ],
    collection: [
      {
        name: 'Платье',
        title: 'трапеция',
        img: '/static/gallery/d2bej1.jpg',
        slider: [
          '/static/gallery/d2bej2.jpg',
          '/static/gallery/d2bej3.jpg',
          '/static/gallery/d2bej4.jpg',
          '/static/gallery/d2bej1.jpg'
        ],
        price: 990,
        order: 1,
        one: 'Фасон: платье трапеция с подрезами',
        two: 'Цвет: бежевый',
        three: 'Длина: выше колена',
        four: 'Карманы: в боковых швах',
        six: 'Платье на подкладке',
      },
      {
        name: 'Платье',
        title: 'трапеция',
        img: '/static/gallery/d2blue1.jpg',
        slider: [
          '/static/gallery/d2blue2.jpg',
          '/static/gallery/d2blue3.jpg',
          '/static/gallery/d2blue4.jpg',
          '/static/gallery/d2blue1.jpg'
        ],
        price: 990,
        order: 2,
        one: 'Фасон: платье трапеция с подрезами',
        two: 'Цвет: синий',
        three: 'Длина: мини',
        four: 'Карманы: в боковых швах',
        six: 'Платье на подкладке',
      },
      {
        name: 'Платье',
        title: 'прямого силуэта',
        img: '/static/gallery/d9_1.jpg',
        slider: [
          '/static/gallery/d9_2.jpg',
          '/static/gallery/d9_3.jpg',
          '/static/gallery/d9_4.jpg',
          '/static/gallery/d9_1.jpg'
        ],
        price: 990,
        order: 3,
        one: 'Фасон: платье прямого силуэта',
        two: 'Цвет: синий, вставка - бежевый',
        three: 'Длина: до колена',
        four: 'Карманы: есть',
        six: 'Платье без подкладки',
      },
      {
        name: 'Платье',
        title: 'футляр',
        img: '/static/gallery/d18_black_bej1.jpg',
        slider: [
          '/static/gallery/d18_black_bej2.jpg',
          '/static/gallery/d18_black_bej3.jpg',
          '/static/gallery/d18_black_bej4.jpg',
          '/static/gallery/d18_black_bej1.jpg'
        ],
        price: 1090,
        order: 4,
        one: 'Фасон: платье футляр полуприлегающего силуэта',
        two: 'Цвет: темно розовый, верх - светло розовый',
        three: 'Длина: ниже колена',
        four: 'Карманы: есть',
        five: 'Особенности: Кокетка по полочке и спине. Со шлицей',
        six: 'Платье без подкладки',
      },
      {
        name: 'Платье',
        title: 'полуприлегающего силуэта',
        img: '/static/gallery/d19_black1.jpg',
        slider: [
          '/static/gallery/d19_black2.jpg',
          '/static/gallery/d19_black3.jpg',
          '/static/gallery/d19_black4.jpg',
          '/static/gallery/d19_black1.jpg'
        ],
        price: 890,
        order: 5,
        one: 'Фасон: платье полуприлегающего силуэта',
        two: 'Цвет: черный',
        three: 'Длина: до колен',
        four: 'Карманы: нет',
        five: 'Особенности: по спинке молния',
        six: 'Платье без подкладки',
      },
      {
        name: 'Платье',
        title: 'прямого силуэта',
        img: '/static/gallery/d20_bordo1.jpg',
        slider: [
          '/static/gallery/d20_bordo2.jpg',
          '/static/gallery/d20_bordo3.jpg',
          '/static/gallery/d20_bordo4.jpg',
          '/static/gallery/d20_bordo1.jpg'
        ],
        price: 990,
        order: 6,
        one: 'Фасон: платье прямого силуэта с вертикальным воланом',
        two: 'Цвет: темно розовый',
        three: 'Длина: до колена',
        four: 'Карманы: есть',
        six: 'Платье  без подкладки',
      }
    ],
    currentItem: {
      title: '',
      img: '',
      slider: ['', '', '', ''],
      price: null,
      desc: ''
    },
    sizes: ['XS', 'S', 'M', 'L'],
    catalogDialog: false,
    sliderDialog: false,
    detail: false,
    orderForm: false,
    presentForm: false,
    present: false,
  },
  mutations: {
    showCardSlider: state => {
      state.sliderDialog = true;
    },
    closeCardSlider: state => {
      state.sliderDialog = false;
    },
    showCatalog: state => {
      state.catalogDialog = true;
    },
    closeCatalog: state => {
      state.catalogDialog = false;
    },
    showDetails: state => {
      state.detail = true;
    },
    closeDetails: state => {
      state.detail = false;
    },
    showOrder: state => {
      state.orderForm = true;
    },
    closeOrder: state => {
      state.orderForm = false;
    },
    showPresent: state => {
      state.presentForm = true;
    },
    closePresent: state => {
      state.presentForm = false;
    },
    hidePresent: state => {
      state.present = false;
    },
    showPresentIcon: state => {
      state.present = true;
    },
  }
});
