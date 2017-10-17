import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menu: [
      { title: 'button', icon: 'star', scrollTo: '3' },
      { title: 'button2', icon: 'star', scrollTo: '3' },
      { title: 'button3', icon: 'star', scrollTo: '3' },
      { title: 'button4', icon: 'star', scrollTo: '3' },
      { title: 'button5', icon: 'star', scrollTo: '3' },
    ],
    collection: [
      {
        title: 'платье 01',
        img: '/static/gallery/d16_1.jpg',
        price: 1234,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru',
        slider: ['/static/gallery/d16_2.jpg', '/static/gallery/d16_3.jpg', '/static/gallery/d16_4.jpg']
      },
      {
        title: 'платье 02',
        img: '/static/gallery/d18_1.jpg',
        price: 1234,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru',
        slider: ['/static/gallery/d16_2.jpg', '/static/gallery/d16_3.jpg', '/static/gallery/d16_4.jpg']
      },
      {
        title: 'платье 03',
        img: '/static/gallery/d19_black1.jpg',
        price: 1234,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru',
        slider: ['/static/gallery/d16_2.jpg', '/static/gallery/d16_3.jpg', '/static/gallery/d16_4.jpg']
      },
      {
        title: 'платье 04',
        img: '/static/gallery/d20_bordo1.jpg',
        price: 1234,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru',
        slider: ['/static/gallery/d16_2.jpg', '/static/gallery/d16_3.jpg', '/static/gallery/d16_4.jpg']
      },
      {
        title: 'платье 05',
        img: '/static/gallery/d2bej2.jpg',
        price: 1234,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru',
        slider: ['/static/gallery/d16_2.jpg', '/static/gallery/d16_3.jpg', '/static/gallery/d16_4.jpg']
      },
      {
        title: 'платье 06',
        img: '/static/gallery/d9_4.jpg',
        price: 1234,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru',
        slider: ['/static/gallery/d16_2.jpg', '/static/gallery/d16_3.jpg', '/static/gallery/d16_4.jpg']
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
