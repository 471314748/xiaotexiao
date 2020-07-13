import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Html from '../views/html.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
