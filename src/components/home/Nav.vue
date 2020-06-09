<template>
  <div class="nav">
    <router-link class="Home" to="/Home" tag="div">
      <div class="iconfont icon-shouye"></div>
      <div>首页</div>
    </router-link>
    <router-link class="Profile" to="/Profile" tag="div">
      <div class="iconfont icon-ren111"></div>
      <div>商务中心</div>
    </router-link>
    <router-link to="/Cart" tag="div">
      <div class="iconfont icon-gouwuche"></div>
      <div>购物车</div>
    </router-link>
  </div>
</template>
<style scoped>
@import "../../assets/css/home-icon/iconfont.css";
.nav {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 4rem;
  bottom: 0;
  display: flex;
}
.nav > div {
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 1rem;
  color: #323232;
  background-color: #fff;
  /* background-color: red; */
  padding-top: 1rem;
}
.nav > div.active {
  color: red;
}
</style>
