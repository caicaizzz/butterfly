import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: import('../views/Home/index.vue')
    },
    {
      path: '/journal',
      name: 'journal',
      component: import('../views/Journal/index.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: import('../views/Blog/index.vue')
    }
  ]
})

export default router
