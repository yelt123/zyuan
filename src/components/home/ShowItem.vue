<template>
  <keep-alive>
    <div class="show-box" v-cloak>
      <router-link class="link" tag="div" :to="{name:clickType,params:{id:item.id}}">
        <div class="left">
          <img v-if="item.goodsimg" :src="item.goodsimg" />
          <img v-else-if="item.thumb" :src="baseURL+item.thumb" />
        </div>
        <div class="right">
          <div class="show-title">{{(item.title||item.goodsname)}}</div>
          <div class="show-desc">{{(item.desc||item.goodsdesc)}}</div>
          <div class="price">{{item.shopprice}}</div>
        </div>
      </router-link>
    </div>
  </keep-alive>
</template>
<script>
export default {
  data: function () {
    return { pageList: [] }
  },
  props: {
    baseURL: { type: String, required: true },
    item: { type: Array | Object, required: true }
  },
  computed: {
    clickType () {
      if (this.item.goodsname) {
        return 'Shop'
      } else if (this.item.desc) {
        return 'IntroductionDetails'
      }
    }
  },

  mounted () {
    console.log(this.item)
  }
}
</script>
<style scoped>
.link {
  position: relative;
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 0rem 1.5rem;
  top: 0.5rem;
  align-items: center;
}

.left img {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 10px;
}
.right {
  position: relative;
  left: 20px;
}
.right .show-title {
  color: rgb(85, 83, 83);
  font-size: 14px;
  font-weight: 600;
}
.right .show-desc {
  font-size: 14px;
  width: 12rem;
  height: 2.5rem;
  color: #969799;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
.price {
  color: red;
  font-weight: 600;
}
</style>
