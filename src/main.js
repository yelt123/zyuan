// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import {
  Switch,
  Field,
  Button,
  Form,
  Area,
  AddressEdit,
  Popup,
  Tab,
  Tabs,
  List
} from 'vant'
Vue.use(List)
Vue.use(Tab)
Vue.use(Tabs)

Vue.use(Button)
Vue.use(Switch)
Vue.use(Field)
Vue.use(Area)
Vue.use(Form)
Vue.use(Popup)
Vue.use(AddressEdit)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
var Bus = new Vue()
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  data: {
    Bus
  },
  store,
  template: '<App/>'
})
