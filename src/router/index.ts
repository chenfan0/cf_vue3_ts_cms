import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import localCatch from '@/utilis/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
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

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCatch.getCatch('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
