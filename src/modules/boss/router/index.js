import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/boss/demo',
    component: () => import('../views/demo/demo1.vue')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
