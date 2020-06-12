<template>
  <div id="app">
    <default-page />
  </div>
</template>

<script>
import defaultPage from '@/layout/Default'
// import { getData } from '@/services/get.js'
export default {
  data () {
    return {
      // showList: []
    }
  },
  name: 'App',
  components: {
    defaultPage
  },
  created () {
    // (async () => {
    //   const res = await getData({
    //     baseURL: 'http://www.manati.cn/public',
    //     url: '/index.php/plugin/home_configuration/api_index/getArticleInfo',
    //     method: 'post',
    //     data: { id: 12 }
    //   })
    //   console.log(res.data)

    //   this.showList.push(res.data)
    //   console.log(this.showList)
    // })()
  }
}
</script>
<style scoped>
</style>
