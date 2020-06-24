<template>
  <div class="Order">
    <nav-bar :name="name" />
    <van-tabs v-model="active" @click="onClick" class="item-box">
      <van-tab title="全部" class="item">
        <div class="shop-item" v-for="(item,index) in shopList" :key="index">
          <div class="item-top">
            <div class="left">{{item.dianpu_name}}</div>
            <div class="right">{{item.status | changeTitle}}</div>
          </div>
          <div class="item-center">
            <div class="left">
              <img :src="item.shop[0].goods_img" />
              <div class="title">{{item.shop[0].goods_name}}</div>
              <div class="price">￥{{item.shop[0].goods_price}}</div>
            </div>
            <div class="right">x{{item.shop[0].goods_num}}</div>
          </div>
          <div class="item-bottom">
            <div>取消订单</div>
            <div>付款</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="待收货">内容 4</van-tab>
      <van-tab title="已完成">内容 5</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import navBar from '../NavBar.vue'
export default {
  filters: {
    changeTitle (a) {
      switch (a) {
        case 6:
          return '已取消'
        case 2:
          return '待发货'
        case 1:
          return '待付款'
      }
    }
  },
  data () {
    return { active: 2, name: '订单中心', shopList: [] }
  },
  components: {
    navBar
  },

  methods: {
    onClick (name, title) {
      console.log(name, title)
    },
    async getData () {
      const res = await this.$axios({
        method: 'post',
        url: '/index.php/plugin/order/api_index/allOrder',
        data: {
          uid: this.$store.state.uData.uid,
          status: this.active + 1,
          page: 1,
          pageNum: 10
        }
      })
      this.shopList = res.data.data
    }
  },
  created () {
    this.getData()
  },
  activated () {
    this.active = this.$route.params.type - 1
  }
}
</script>
<style scoped>
.item-box {
  width: 100%;
  padding-bottom: 10rem;
  background-color: rgba(75, 68, 51, 0.1);
}

.shop-item {
  width: 90%;
  height: 10rem;
  background-color: #fff;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 1rem 0;
  border-radius: 20px;
}
.shop-item .item-top {
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
}
.shop-item .item-top .left {
  float: left;
  font-weight: 800;
}
.shop-item .item-top .right {
  float: right;
  color: red;
}
.shop-item .item-center {
  position: relative;
  width: 100%;
  height: 50%;
  margin-top: 0.5rem;
}
.shop-item .item-center .left {
  /* left: 1rem; */
  width: 80%;
  height: 100%;
  position: absolute;
  /* background-color: rgba(117, 4, 4, 0.2); */
  display: flex;
}
.shop-item .item-center .left img {
  width: 5rem;
  height: 5rem;
  position: absolute;
  left: 1rem;
}
.shop-item .item-center .left .title {
  position: absolute;
  left: 7rem;
  top: 1rem;
}
.shop-item .item-center .left .price {
  position: absolute;
  left: 7rem;
  top: 3rem;
  color: red;
}
.shop-item .item-center .right {
  right: 1rem;
  width: 20%;
  height: 100%;
  position: absolute;
  /* background-color: rgba(14, 185, 66, 0.2); */
  line-height: 5rem;
  text-align: right;
  color: rgba(117, 111, 111, 0.8);
}
.item-bottom div {
  float: right;
  margin-right: 0.5rem;
  border: 1px solid rgba(117, 111, 111, 0.5);
  text-align: center;
  line-height: 2rem;
  border-radius: 2rem;
  width: 5rem;
  font-size: 14px;
  height: 2rem;
}
</style>
