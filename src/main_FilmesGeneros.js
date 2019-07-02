import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import Vuetify from 'vuetify'

Vue.config.productionTip = false;

window.apiUrl = 'http://localhost:3000';

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import EFilmesComponent from './components/EFilmesComponent.vue';
import CFilmesComponent from './components/CFilmesComponent.vue';
import FilmesComponent from './components/FilmesComponent.vue';
import CGenerosComponent from './components/CGenerosComponent.vue';
import EGenerosComponent from './components/EGenerosComponent.vue';


const routes = [
  {
      name: 'cFilmes',
      path: '/filmes',
      component: CFilmesComponent
  },
  {
      name: 'eFilmes',
      path: '/filmes/:id',
      component: EFilmesComponent
  },
  {
      name: 'cGeneros',
      path: '/generos',
      component: CGenerosComponent
  },
  {
      name: 'eGeneros',
      path: '/generos/:id',
      component: EGenerosComponent
  },  
  {
    name: 'filmeEscolhido',
    path: '/filmesEscolhido/:id',
    component: FilmesComponent
  },
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
