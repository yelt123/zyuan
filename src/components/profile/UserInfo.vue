<template>
  <div class="user-info">
    <div class="top-info">
      <div class="left">
        <img
          src="http://www.manati.cn//public/plugins/member/view/public/image/header/20200608/1591619635w5UplP_thumb_150.png"
          alt
        />
        <div class="name">昵称</div>
        <div class="box">
          <div class="balance">￥0.00元</div>
        </div>
      </div>
      <div class="right">
        <span class="iconfont icon-shezhi"></span>
      </div>
    </div>
    <div class="bottom-info">
      <div class="icon">
        <span class="iconfont icon-aixin"></span>
        <span>爱心值51</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/profile-icon/iconfont.css";

.user-info {
  height: 25%;
  border-radius: 0 0 8rem 8rem/0 0 0.53333rem 0.53333rem;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  color: #fff;
}
.top-info {
  display: flex;
  height: 60%;
  justify-content: space-between;
}
.left {
  width: 80%;
  position: relative;
  font-size: 14px;
}
.left img {
  display: inline-block;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 0;
  left: 1rem;
}
.left .name,
.left .box {
  position: absolute;
}
.left .name {
  bottom: 2rem;
  left: 6rem;
}
.left .box {
  background-color: rgba(19, 5, 5, 0.2);
  width: 4.5rem;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  left: 5rem;
  bottom: 0rem;
  border-radius: 30px;
}
.right {
  width: 20%;
}

.right .icon-shezhi {
  font-size: 26px;
  position: absolute;
  right: 1rem;
  top: 2rem;
}
.bottom-info {
  top: 1rem;
  position: relative;
  height: 40%;
  line-height: -10%;
}
.icon {
  /* transform: translate(calc(50% - 55px), 15px); */
  text-align: center;
}
.icon-aixin {
  font-size: 25px;
}
</style>
