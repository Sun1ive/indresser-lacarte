import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menu: [
      { title: 'Pains', icon: '3d_rotation', scrollTo: ".pains" },
      { title: 'Slider', icon: 'autorenew', scrollTo: '.slider' },
      { title: 'Confidence', icon: 'alarm_on', scrollTo: '.confidence' },
      { title: 'Catalog', icon: 'bookmark', scrollTo: '.catalog' },
      { title: 'Delivery', icon: 'star', scrollTo: '.deliver' },
      { title: 'What u ll get', icon: 'star', scrollTo: '.whatullget' },
      { title: 'Reviews', icon: 'star', scrollTo: '.reviews' },
      { title: 'Video', icon: 'star', scrollTo: '.video' },
      { title: 'Request', icon: 'star', scrollTo: '.request' },
      { title: 'Comments', icon: 'star', scrollTo: '.comments' },
      { title: 'Collection', icon: 'star', scrollTo: '.collection' },
      { title: 'Special', icon: 'star', scrollTo: '.special' },
    ],
    collection: [
      {
        title: 'Платье 01',
        img: '/static/gallery/d2bej1.jpg',
        slider: ['/static/gallery/d2bej2.jpg','/static/gallery/d2bej3.jpg','/static/gallery/d2bej4.jpg', '/static/gallery/d2bej1.jpg'],
        price: 123,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 02',
        img: '/static/gallery/d2blue1.jpg',
        slider: ['/static/gallery/d2blue2.jpg','/static/gallery/d2blue3.jpg','/static/gallery/d2blue4.jpg','/static/gallery/d2blue1.jpg'],
        price: 321,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 03',
        img: '/static/gallery/d3blue1.jpg',
        slider: ['/static/gallery/d3blue2.jpg','/static/gallery/d3blue3.jpg','/static/gallery/d3blue1.jpg', '/static/gallery/d3blue3.jpg'],
        price: 554,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 03',
        img: '/static/gallery/d3black1.jpg',
        slider: ['/static/gallery/d3black2.jpg','/static/gallery/d3black3.jpg','/static/gallery/d3black4.jpg','/static/gallery/d3black1.jpg'],
        price: 771,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 09',
        img: '/static/gallery/d9_1.jpg',
        slider: ['/static/gallery/d9_2.jpg','/static/gallery/d9_3.jpg','/static/gallery/d9_4.jpg','/static/gallery/d9_1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 16',
        img: '/static/gallery/d16_1.jpg',
        slider: ['/static/gallery/d16_2.jpg','/static/gallery/d16_3.jpg','/static/gallery/d16_4.jpg','/static/gallery/d16_1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 18',
        img: '/static/gallery/d18_1.jpg',
        slider: ['/static/gallery/d18_2.jpg','/static/gallery/d18_3.jpg','/static/gallery/d18_4.jpg','/static/gallery/d18_1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 18',
        img: '/static/gallery/d18_black_bej1.jpg',
        slider: ['/static/gallery/d18_black_bej2.jpg','/static/gallery/d18_black_bej3.jpg','/static/gallery/d18_black_bej4.jpg','/static/gallery/d18_black_bej1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 19',
        img: '/static/gallery/d19_black1.jpg',
        slider: ['/static/gallery/d19_black2.jpg','/static/gallery/d19_black3.jpg','/static/gallery/d19_black4.jpg','/static/gallery/d19_black1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 19',
        img: '/static/gallery/d19_red1.jpg',
        slider: ['/static/gallery/d19_red2.jpg','/static/gallery/d19_red3.jpg','/static/gallery/d19_red4.jpg','/static/gallery/d19_red1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 20',
        img: '/static/gallery/d20_bordo1.jpg',
        slider: ['/static/gallery/d20_bordo2.jpg','/static/gallery/d20_bordo3.jpg','/static/gallery/d20_bordo4.jpg','/static/gallery/d20_bordo1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
      {
        title: 'Платье 20',
        img: '/static/gallery/d20_darkblue1.jpg',
        slider: ['/static/gallery/d20_darkblue2.jpg','/static/gallery/d20_darkblue3.jpg','/static/gallery/d20_darkblue4.jpg','/static/gallery/d20_darkblue1.jpg'],
        price: 551,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laboru'
      },
    ],
    fixed: false
  },
  mutations: {
    isFixed: state => {
      state.fixed = true
    },
    notFixed: state => {
      state.fixed = false
    }
  }
});
