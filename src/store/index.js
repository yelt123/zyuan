import Vue from 'vue'
import Vuex from 'vuex'
import {GET_USERDATA, GET_PERSONALDATA} from './mutation-types'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    uData: '',
    personalData: []
  },
  mutations: {
    [GET_USERDATA] (state, {data}) {
      state.uData = data
    },
    [GET_PERSONALDATA] (state, {data}) {
      state.personalData = data
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store
