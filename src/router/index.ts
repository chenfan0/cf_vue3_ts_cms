import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
