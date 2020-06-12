<template>
  <div class="introductio-details">
    <nav-bar :name="name" />

    <div class="title">{{showList.title}}</div>

    <div class="bottom">
      <div class="content" v-html="showList.content"></div>
    </div>
  </div>
</template>
<script>
import NavBar from '../profile/NavBar.vue'
import { getData } from '@/services/get.js'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      name: '介绍详情',
      showList: []
    }
  },
  methods: {
    async changePage () {
      const res = await getData({
        baseURL: 'http://www.manati.cn/public',
        url: '/index.php/plugin/home_configuration/api_index/getArticleInfo',
        method: 'post',
        data: { id: this.$route.params.id }
      })
      this.showList = res.data

      // console.log(this.showList)
    }
  },
  created () {
    this.changePage()
  }
}
</script>
<style>
.introductio-details {
  width: 100%;
  position: relative;
}
.introductio-details .title {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
}
.bottom {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  overflow: hidden;
  font-family: monospace, monospace;
}
.content p {
  width: 100%;
  font-size: 1rem;
}
.content p img {
  max-width: 100%;
}
</style>
