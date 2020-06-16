<template>
  <div class="address">
    <myNav :name="name" />

    <div class="address-top">地址</div>
    <router-link to="/EditAddress" class="address-bottom">
      <div class="a-box">添加地址</div>
    </router-link>
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  created () {
    console.log(this.$route.params)
  },
  data () {
    return {
      name: '地址管理'
    }
  },
  components: { myNav }
}
</script>
<style scoped>
.address-top {
  background-color: rgba(131, 128, 128, 0.2);
  width: 100%;
  padding-bottom: 10rem;
}
.address-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
}
.a-box {
  width: 90%;
  background-color: #ee0a24;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 3rem;
  border-radius: 2rem;
  text-align: center;
  line-height: 3rem;
}
</style>
