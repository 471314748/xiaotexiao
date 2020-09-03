import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Html from '../views/html.vue'
import Zi from '../views/emit/zi.vue';
import Fu from '../views/emit/fu.vue';
import Mock from '../views/mock/mock.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/',
    name: 'html',
    component: Html
  },
  {
    path: '/fu',
    component: Fu
  },
  {
    path: '/zi',
    component: Zi
  },
  {
    path: '/mock',
    component: Mock
  },
]

const router = new VueRouter({
  routes
})

export default router
