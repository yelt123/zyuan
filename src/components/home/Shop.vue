<template>
  <div class="shop">
    <div class="shop-details">
      <div class="icon-box" @click="backPage">
        <span class="iconfont icon-arrow-left" />
      </div>

      <div class="shop-carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="http://www.manati.cn/public/plugins/goods/view/public/image/goodsthumb/20200512/df8b28803f5de8058a42af9281e9ffb3.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="http://www.manati.cn/public/plugins/goods/view/public/image/goodsthumb/20200512/412f7f639f0718c558529adf4f7b5edd.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="shop-center">
        <div class="shop-name">{{shopData.goodsname}}</div>
        <div class="shop-price">￥{{shopData.shopprice}}</div>
      </div>
      <div class="shop-info" v-html="shopData.goodsinfo" />
    </div>
    <shop-bottom />
  </div>
</template>
<script>
import shopBottom from './shopBottom'

export default {
  components: {
    shopBottom
  },
  data () {
    return {
      shopData: {}
    }
  },
  props: { id: { type: [Number, String] } },
  created () {
    this.getData()
  },
  methods: {
    backPage () {
      this.$router.go(-1)
    },
    async getData () {
      const res = await this.$axios({
        url: '/index.php/plugin/goods/api_index/goodsinfo',
        method: 'post',
        data: {
          id: this.id,
          uid: this.$store.state.uData.uid
        }
      })
      this.shopData = res.data.data
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/shop-icon/iconfont.css";
/* @import "../../assets/css/home-icon/iconfont.css"; */

.shop {
  width: 100%;
  height: auto;
}
.shop-details {
  width: 100%;
  padding-bottom: 105rem;
  /* height: ; */
  /* background-color: rgba(245, 30, 14, 0.1); */
  position: relative;
}

.icon-box {
  width: 3rem;
  height: 3rem;
  background-color: rgba(16, 16, 17, 0.2);
  position: absolute;
  left: 5%;
  top: 2rem;
  border-radius: 50%;
  z-index: 5;
}

.icon-box .iconfont {
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.shop-center {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  border-bottom: 1px solid rgba(3, 3, 3, 0.1);
}
.shop-center .shop-name {
  float: left;
  padding-left: 2rem;
}
.shop-center .shop-price {
  float: right;
  padding-right: 2rem;
  color: red;
  font-size: 18px;
  font-weight: 600;
}
.shop-info {
  padding: 0 1rem;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-all;
  font-weight: 400;
  height: auto;
}
.shop-info >>> p {
  line-height: 2rem;
}
</style>
