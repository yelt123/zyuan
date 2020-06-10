<template>
  <div class="agent">
    <myNav :logo="logo" :name="name" />
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return { logo: '申请记录', name: '成为代理' }
  },
  components: { myNav }
}
</script>
<style scoped>
.agent {
  width: 100%;
  height: 37.6rem;
  background-color: rgba(109, 106, 106, 0.2);
}
</style>
