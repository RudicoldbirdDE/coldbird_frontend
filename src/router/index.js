import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/imprint',
    name: 'Imprint',
    // route level code-splitting
    // this generates a separate chunk (imprint.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    // route level code-splitting
    // this generates a separate chunk (policy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "policy" */ '../views/Policy.vue')
  },
  {
    path: '/carrers',
    name: 'Carrers',
    component: () => import('../views/carrers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
