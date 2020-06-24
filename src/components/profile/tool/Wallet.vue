<template>
  <div class="wallet">
    <myNav :name="name" :logo='logo'/>
    <div class="wallet-top"></div>
    <div class="wallet-bottom"></div>
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return { name: '我的钱包', logo: '刷新' }
  },
  components: { myNav }
}
</script>
<style scoped>
.wallet{
  width: 100vw;
  height: 100vh;
}
.wallet >>> .nav-box{
  background-color: #1989fa;
  color: #fff;
}
.wallet >>> .right{
  color: #fff;
}
</style>
