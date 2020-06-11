<template>
  <div id="app">
    <default-page />
  </div>
</template>

<script>
import defaultPage from '@/layout/Default'
// import { getData } from '@/services/get.js'
export default {
  name: 'App',
  components: {
    defaultPage
  }
  // async created () {
  //   await getData({
  //     method: 'post',
  //     baseURL: 'http://www.manati.cn/public',
  //     url: '/index.php/plugin/home_configuration/api_index/getArticle',
  //     data: { type: 1, page: 1, limit: 5 }
  //   })
  // }
}
</script>
<style scoped>
</style>
