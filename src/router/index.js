import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/Home'
import profile from '@/layout/Profile'
import cart from '@/layout/Cart'
import Agent from '@/components/profile/tool/Agent.vue'
import Address from '@/components/profile/tool/Address.vue'
import Extension from '@/components/profile/tool/Extension.vue'
import Message from '@/components/profile/tool/Message.vue'
import Security from '@/components/profile/tool/Security.vue'
import Wallet from '@/components/profile/tool/Wallet.vue'
import ProxyRecord from '@/components/profile/tool/ProxyRecord.vue'
import AddMessage from '@/components/profile/tool/AddMessage.vue'
Vue.use(Router)

export default new Router({
  routes: [{
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
  }, {
    path: '/Agent',
    name: 'Agent',
    component: Agent
  }, {
    path: '/Address',
    name: 'Address',
    component: Address
  }, {
    path: '/Extension',
    name: 'Extension',
    component: Extension
  }, {
    path: '/Message',
    name: 'Message',
    component: Message
  }, {
    path: '/Security',
    name: 'Security',
    component: Security
  },
  {
    path: '/Wallet',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/ProxyRecord',
    name: 'ProxyRecord',
    component: ProxyRecord
  },
  {
    path: '/AddMessage',
    name: 'AddMessage',
    component: AddMessage
  }
  ]
})
