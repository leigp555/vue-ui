import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const Guide = () => import('@/views/Guide.vue')
const Components = () => import('@/views/Components.vue')
const NotFound = () => import('@/views/NotFound.vue')
const Button = () => import('@/eg/button/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/components',
    name: 'Components',
    component: Components,
    children: [
      {
        path: '',
        alias: 'button',
        name: 'ButtonEg',
        component: Button
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
