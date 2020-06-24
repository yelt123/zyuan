<template>
  <div class="transactions">
    <div class="transactions-box">
      <ul>
        <li v-for="item in transactionsList" :key="item.id">
          <router-link :to="{name:'Order',params:{type : item.id }}">
            <span class="iconfont" :class="item.icon"></span>
            <div @click="handleClick">{{item.title}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      // this.$store.state.uData.uid = null
    }
  },
  data () {
    return {
      transactionsList: [
        { icon: 'icon-iconset0193', title: '全部', id: 1 },
        { icon: 'icon-qianbao-', title: '待付款', id: 2 },
        { icon: 'icon-daifahuo', title: '待发货', id: 3 },
        { icon: 'icon-daishouhuo', title: '待收货', id: 4 },
        { icon: 'icon-yiwancheng', title: '已完成', id: 5 }
      ]
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/profile-icon/iconfont.css";
.transactions {
  height: 15%;
  width: 100%;
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
  text-align: center;
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
}
</style>
