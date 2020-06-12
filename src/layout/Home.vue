<template>
  <keep-alive>
    <div class="contain">
      <search />
      <div class="center">
        <carousel />
        <showcase />
        <commodity />
      </div>
    </div>
  </keep-alive>
</template>
<script>
import search from '@/components/home/Search'
import carousel from '@/components/home/Carousel'
import showcase from '@/components/home/Showcase'
import commodity from '@/components/home/Commodity'
// import { getData } from '@/services/get.js'
export default {
  components: {
    search,
    carousel,
    showcase,
    commodity
  },
  created () {
    // (async function () {
    //   await getData({
    //     method: 'post',
    //     baseURL: 'http://www.manati.cn/public',
    //     url: '/index.php/plugin/home_configuration/api_index/getArticle',
    //     data: { type: 1, page: 1, limit: 5 }
    //   })
    // })()
  }
}
</script>
<style scoped>
.contain {
  position: relative;
  height: 100rem;
}
.contain .center {
  position: absolute;
  top: 3rem;
  width: 100%;
  bottom: 0;
  height: 100%;
  background-color: rgba(94, 84, 69, 0.1);
}
</style>
