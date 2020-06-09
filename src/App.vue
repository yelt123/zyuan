<template>
  <div id="app">
    <router-view />
    <bottomNav />
  </div>
</template>

<script>
import bottomNav from '@/components/home/Nav'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    bottomNav
  },
  created () {
    axios(
      'http://www.manati.cn/public/index.php/plugin/home_configuration/api_index/getArticleInfo'
    ).then(res => {
      console.log(res)
    })
  }
}
</script>
<style scoped>
</style>
