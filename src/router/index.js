import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/Default'
import profile from '@/layout/Profile'
import cart from '@/layout/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      alias: '/Home',
      component: defaultPage
    }, {
      path: '/Profile',
      name: 'Profile',
      component: profile
    }, {
      path: '/Cart',
      name: 'Cart',
      component: cart
    }
  ]
})
