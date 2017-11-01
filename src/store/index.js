import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menu: [
      { title: 'Pains', icon: '3d_rotation', scrollTo: '.pains' },
      { title: 'Slider', icon: 'autorenew', scrollTo: '.slider' },
      { title: 'Confidence', icon: 'alarm_on', scrollTo: '.confidence' },
      { title: 'Catalog', icon: 'bookmark', scrollTo: '.catalog' },
      { title: 'Delivery', icon: 'star', scrollTo: '.deliver' },
      { title: 'What u ll get', icon: 'star', scrollTo: '.whatullget' },
      { title: 'Video', icon: 'star', scrollTo: '.video' },
      { title: 'Request', icon: 'star', scrollTo: '.request' },
      { title: 'Collection', icon: 'star', scrollTo: '.collection' },
      { title: 'Special', icon: 'star', scrollTo: '.special' }
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
  }
});
