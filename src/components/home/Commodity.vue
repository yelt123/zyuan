<template>
  <div class="commodity">
    <div v-for="item in showList" :key="item.id">
      <show-item :item="item" :baseURL="baseURL" />
    </div>
  </div>
</template>
<script>
import showItem from './ShowItem.vue'
import { getData } from '@/services/get.js'
export default {
  data () {
    return {
      showList: [],
      baseURL: 'http://www.manati.cn/public'
    }
  },
  components: { showItem },
  methods: {
    async changePage () {
      const res = await getData({
        baseURL: this.baseURL,
        url: '/index.php/plugin/goods/api_index/goodslist'
      })
      this.showList.push(res.data)
    }
  },
  created () {
    this.changePage()
  }
}
</script>
<style scoped>
.commodity {
  background-color: #fff;
  height: 6rem;
  position: relative;
  margin: 1rem 0;
}
</style>
