import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from './views/Home.vue'

export default () => createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/NewCompany.vue')
    },
    {
      path: '/company/:id/edit',
      name: 'edit',
      component: () => import('./views/EditCompany.vue'),
      props: true
    },
  ]
})
