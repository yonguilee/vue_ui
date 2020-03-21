import Vue from 'vue'
import VueRouter from 'vue-router'
import Like from '@/components/Like'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/like', component: Like },
  ]
})

export default router