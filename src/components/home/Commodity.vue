<template>
  <div class="commodity">
    <show-item :item="showList" :baseURL="baseURL" />
  </div>
</template>
<script>
import showItem from './ShowItem.vue'
import { getData } from '@/services/get.js'
export default {
  data () {
    return {
      showList: {},
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
      this.showList = res.data
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
  padding-top: .5rem;
}

</style>
