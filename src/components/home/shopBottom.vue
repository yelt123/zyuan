<template>
  <div class="shopButtom">
    <div class="cart-icon" @click.stop="onclick('icon')">
      <div class="iconfont icon-gouwuche"></div>
    </div>
    <div class="cart-add" @click="onclick('add')">加入购物车</div>
    <div class="shopping" @click="onclick('shopping')">立即购买</div>
    <div class="details" v-show="detailsStatus">
      <div class="details-bottom">详情底部</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      status: '',
      detailsStatus: false
    }
  },
  methods: {
    onclick (data) {
      this.status = data
      if (data === 'icon') {
        this.$router.push('/Cart')
      } else if (data === 'add') {
        alert('暂未开放，敬请期待')
      } else if (data === 'shopping') {
        this.detailsStatus = true
      }
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/home-icon/iconfont.css";
.shopButtom {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 3rem;
  background-color: #fff;
  display: flex;
  text-align: center;
  line-height: 3rem;
  outline: none;
}
.shopButtom .cart-icon {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
}
.cart-icon .iconfont {
  color: rgba(51, 50, 50, 0.5);
  padding-top: 0.2rem;
  font-size: 1.5rem;
}
.shopButtom .cart-add,
.shopButtom .shopping {
  flex: 1;
  color: #fff;
}
.shopButtom .cart-add {
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  background: linear-gradient(90deg, #ffd01e, #ff8917);
}
.shopButtom .shopping {
  background: linear-gradient(90deg, #ff6034, #ee0a24);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
}
.active {
  /* background: linear-gradient(90deg, rgba(10, 10, 10, 0.3),rgba(10, 10, 10, 0.3)); */
  background-color: rgba(10, 10, 10, 0.3);
  animation: 0.1s linear;
}
.details {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  background-color: rgba(0, 0, 0, 0.3);
}
.details .details-bottom {
  width: 100%;
  height: 17rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
}
</style>
