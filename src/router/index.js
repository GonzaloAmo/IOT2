import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/IOT2/'),
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/:id/:device',
      name: 'device',
      props: true,
      component: () => import('@/views/DevicesViews.vue')
    }
  ]
})

export default router
