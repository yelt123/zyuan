import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    alias: '/Home',
    meta: {
      title: '首页'
    },
    component: () => import('@/layout/Home')
  }, {
    path: '/Profile',
    meta: {
      title: '商务中心'
    },
    name: 'Profile',
    component: () => import('@/layout/Profile')

  }, {
    path: '/Cart',
    meta: {
      title: '购物车'
    },
    name: 'Cart',
    component: () => import('@/layout/Cart')
  }, {
    path: '/Agent',
    name: 'Agent',
    meta: {
      title: '成为代理'
    },
    component: () => import('@/components/profile/tool/Agent.vue')
  }, {
    path: '/Address',
    name: 'Address',
    meta: {
      title: '地址管理'
    },
    component: () => import('@/components/profile/tool/Address.vue'),
    props: true
  }, {
    path: '/Extension',
    name: 'Extension',
    meta: {
      title: '推广链接'
    },
    component: () => import('@/components/profile/tool/Extension.vue')
  }, {
    path: '/Message',
    name: 'Message',
    meta: {
      title: '留言板'
    },
    component: () => import('@/components/profile/tool/Message.vue')
  }, {
    path: '/Security',
    name: 'Security',
    meta: {
      title: '安全中心'
    },
    component: () => import('@/components/profile/tool/Security.vue')
  },
  {
    path: '/Wallet',
    name: 'Wallet',
    meta: {
      title: '我的钱包'
    },
    component: () => import('@/components/profile/tool/Wallet.vue')
  },
  {
    path: '/ProxyRecord',
    name: 'ProxyRecord',
    meta: {
      title: '申请记录'
    },
    component: () => import('@/components/profile/tool/ProxyRecord.vue')
  },
  {
    path: '/AddMessage',
    name: 'AddMessage',
    meta: {
      title: '新增留言'
    },
    component: () => import('@/components/profile/tool/AddMessage.vue')
  },
  {
    path: '/IntroductionDetails/:id',
    name: 'IntroductionDetails',
    meta: {
      title: '文章详情'
    },
    component: () => import('@/components/home/IntroductionDetails.vue')
  },
  {
    path: '/Shop/:id',
    name: 'Shop',
    meta: {
      title: '商品详情'
    },
    component: () => import('@/components/home/Shop.vue'),
    props: true
  },
  {
    path: '/EditAddress',
    name: 'EditAddress',
    meta: {
      title: '添加地址'
    },
    component: () => import('@/components/profile/tool/EditAddress.vue'),
    props: true
  },
  {
    path: '/Order:type',
    name: 'Order',
    meta: {
      title: '订单中心'
    },
    component: () => import('@/components/profile/transactions/Order.vue')
  }
  ]
})
