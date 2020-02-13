import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import Time from '../views/Time.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/car',
    name: 'car',
    component: Car,
  },
  {
    path: '/time',
    name: 'time',
    component: Time,
  },
]

const router = new VueRouter({
  routes
})

export default router
