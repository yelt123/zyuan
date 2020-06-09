<template>
  <div class="search">
    <div class="search-box">
      <div class="search-icon">
        <span class="iconfont icon-sousuo"></span>
      </div>
      <div class="search-input">
        <input type="text" placeholder="请输入搜索关键词" />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
@import "../../assets/css/home-icon/iconfont.css";
.search {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 3rem;
  line-height: 3rem;
  background-color: red;
}
.search-box {
  width: 90%;
  position: relative;
  height: 70%;

  /* box-sizing: border-box; */
  background-color: #fff;
  top: 15%;
  left: 5%;
  border-radius: 2rem;
}
.search-box .search-icon {
  width: 2rem;
  height: 80%;
  background-color: #fff;
  position: absolute;
  top: 5%;
  left: 0.5rem;
  line-height: 200%;
  /* border: 1px solid black; */
}
.icon-sousuo {
  font-size: 20px;
}
.search-input input {
  position: absolute;
  display: inline-block;
  outline: none;
  left: 10%;
  top: 7%;
  width: 85%;
  height: 80%;
  border: none;
}
</style>
