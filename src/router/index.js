// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/redfox/',
    name: 'redfox',
    component: () => import('@/views/Redfox.vue'),
  },
  {
    path: '/redfox/homestay/',
    name: 'homestay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Homestay.vue'),
  },
  {
    path: '/redfox/architecture/',
    name: 'architecture',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Arch.vue'),
  },
  {
    path: '/redfox/automotive/',
    name: 'automotive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Autos.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
