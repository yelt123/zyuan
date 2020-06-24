<template>
  <div class="agent">
    <myNav :logo="logo" :name="name" />
    <div v-if="add" class="y-agent">您已是代理{{stateCount}}</div>
    <router-link v-else to="/addAgent">新增代理</router-link>
    <button @click="$store.state.count++">点击</button>
  </div>
</template>
<script>
import myNav from '../NavBar'
import { mapState } from 'vuex'
export default {
  data () {
    return { logo: '申请记录', name: '成为代理', add: false, count: 100 }
  },
  components: { myNav },
  created () {
    this.add = document.cookie.includes('login=true')
    if (this.add) {
      setTimeout(() => {
        // alert('您已是代理')
      }, 0)
    }
  },
  computed: { ...mapState({
    stateCount: 'count'
  }) }
}
</script>
<style scoped>
.agent {
  width: 100%;
  height: 37.6rem;
  background-color: rgba(131, 128, 128, 0.1);
}
.y-agent {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  padding: 0 1vh;
  color: #ed6a0c;
  background-color: #fffbe8;
}
</style>
