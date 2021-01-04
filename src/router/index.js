import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/404.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    alias: '/Home',
    meta: {
      title: 'Black Lives Matter Morristown',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
