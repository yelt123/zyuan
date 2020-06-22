import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/utils/auth.js'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    alias: '/Home',
    meta: {
      title: '首页'
    },
    component: () => import('@/layout/Home'),
    props: true
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
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {
      title: '用户登录',
      requireLogin: true
    },
    component: () => import('@/layout/Login.vue')
  }
  ]
})
router.beforeEach((to, from, next) => {
  // 查看该路由内是否不需要验证登录
  const isRequiresLogin = to.matched.some(item => item.meta.requireLogin)
  if (isRequiresLogin) {
    next()
  } else {
    const res = auth.isLogin()
    // console.log(res)
    if (res) {
      next()
    } else {
      const isLogin = window.confirm('是否登录')
      isLogin ? next('/Login') : next(false)
    }
  }
})
export default router
