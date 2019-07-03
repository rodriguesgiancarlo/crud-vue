import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(VueAxios, axios);


import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import SalaComponent from './components/SalaComponent.vue';
import UserComponent from './components/UserComponent.vue';
import AddUserComponent from './components/AddUserComponent.vue';
import EditSenhaComponent from './components/EditSenhaComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import EditCapacityComponent from './components/EditCapacityComponent.vue';





const routes = [
  {
      name: 'login',
      path: '/',
      component: LoginComponent
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
  },
  {
      name: 'sala',
      path: '/sala',
      component: IndexComponent
  },
  {
      name: 'salas',
      path: '/salas',
      component: SalaComponent
},
{
      name: 'usuarios',
      path: '/usuarios',
      component: UserComponent
},
{
      name: 'addusuario',
      path: '/newusuario',
      component: AddUserComponent
},
{
      name: 'editsenha',
      path: '/editsenha',
      component: EditSenhaComponent
},
{
      name: 'editcapacity',
      path: '/editcapacity',
      component: EditCapacityComponent
}
]

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
