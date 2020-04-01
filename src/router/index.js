import Vue from 'vue'
import VueRouter from 'vue-router'
import LikeView from '@/views/LikeView'
import DeepTestView from '@/views/DeepTestView'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/like-view', component: LikeView },
    { path: '/deep-test-view', component: DeepTestView },
  ]
})

export default router