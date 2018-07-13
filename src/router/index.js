import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import History from '@/components/History'
import NotFound from '@/components/NotFound'
import SelfHelp from '@/components/SelfHelp'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/self-help',
      name: 'Self-Help',
      component: SelfHelp
    },
    {
      path: '/notFound',
      name: 'Not-Found',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/notFound')
  } else {
    next()
  }
})
export default router
