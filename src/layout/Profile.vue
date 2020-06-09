<template>
  <div class="profile">
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
    <div class="transactions">
      <div class="transactions-box">
        <ul>
          <li>
            <span class="iconfont icon-iconset0193"></span>
            <div>全部</div>
          </li>
          <li>
            <span class="iconfont icon-qianbao-"></span>
            <div>待付款</div>
          </li>
          <li>
            <span class="iconfont icon-daifahuo"></span>
            <div>待发货</div>
          </li>
          <li>
            <span class="iconfont icon-daishouhuo"></span>
            <div>待收货</div>
          </li>
          <li>
            <span class="iconfont icon-yiwancheng"></span>
            <div>已完成</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tool">
      <div class="tool-head">我的工具</div>
      <div class="tool-box">
        <div class="tool-item">1</div>
        <div class="tool-item">2</div>
        <div class="tool-item">3</div>
        <div class="tool-item">4</div>
        <div class="tool-item">5</div>
        <div class="tool-item">6</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
@import "../assets/css/profile-icon/iconfont.css";
.profile {
  width: 100%;
  height: 38rem;
  background-color: rgba(75, 68, 51, 0.1);
}
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

.transactions {
  height: 15%;
  position: relative;
}
.transactions .transactions-box {
  position: absolute;
  height: 70%;
  width: 95%;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
}
.transactions-box ul {
  display: flex;
}
.transactions-box ul li {
  flex: 1;
  display: flex;
  justify-content: center;
  list-style: none;
  display: inline-block;
  padding-top: 6px;
}
.transactions-box ul li span {
  color: red;
  font-size: 22px;
  font-weight: 800;
}
.transactions-box ul li div {
  font-size: 14px;
  color: rgb(107, 104, 104);
  transform: translateX(-5px);
}
.tool {
  height: 30%;
  background-color: rgba(160, 207, 160, 0.5);
}
.tool .tool-head {
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 14px;
  padding-left: 2rem;
}
.tool .tool-box {
  height: 100%;
}
.tool .tool-item {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 24%;
  height: 38%;
  margin-bottom: 2px;
  border: 1px solid red;
}
</style>
