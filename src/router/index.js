import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    alias: '/Home',
    component: () => import('@/layout/Home')
  }, {
    path: '/Profile',
    name: 'Profile',
    component: () => import('@/layout/Profile')

  }, {
    path: '/Cart',
    name: 'Cart',
    component: () => import('@/layout/Cart')
  }, {
    path: '/Agent',
    name: 'Agent',
    component: () => import('@/components/profile/tool/Agent.vue')
  }, {
    path: '/Address',
    name: 'Address',
    component: () => import('@/components/profile/tool/Address.vue')
  }, {
    path: '/Extension',
    name: 'Extension',
    component: () => import('@/components/profile/tool/Extension.vue')
  }, {
    path: '/Message',
    name: 'Message',
    component: () => import('@/components/profile/tool/Message.vue')
  }, {
    path: '/Security',
    name: 'Security',
    component: () => import('@/components/profile/tool/Security.vue')
  },
  {
    path: '/Wallet',
    name: 'Wallet',
    component: () => import('@/components/profile/tool/Wallet.vue')
  },
  {
    path: '/ProxyRecord',
    name: 'ProxyRecord',
    component: () => import('@/components/profile/tool/ProxyRecord.vue')
  },
  {
    path: '/AddMessage',
    name: 'AddMessage',
    component: () => import('@/components/profile/tool/AddMessage.vue')
  },
  {
    path: '/IntroductionDetails/:id',
    name: 'IntroductionDetails',
    component: () => import('@/components/home/IntroductionDetails.vue')
  },
  {
    path: '/Shop/:id',
    name: 'Shop',
    component: () => import('@/components/home/Shop.vue')
  }
  ]
})
