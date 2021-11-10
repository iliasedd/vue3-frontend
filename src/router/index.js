import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Signin from '../views/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({ name: 'Signin' })
      }
      next()
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router