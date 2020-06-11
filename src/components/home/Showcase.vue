<template>
  <div class="showcase">
    <div class="introduce container">
      <span class="Recommend col-6" @click.passive="changePage('Recommend')">企业简介</span>
      <span class="Health col-6" @click.passive="changePage('Health')">疾病与健康</span>
    </div>
    <template>
      <div class="exhibition-area animate__animated animate__slideInLeft" v-if="show">
        <div class="item" :showList="showList" v-for="item in showList" :key="item.id">
          <show-item :baseURL="baseURL" :item="item" />
        </div>
      </div>
      <div class="exhibition-area animate__animated animate__slideInRight" v-else>
        <div class="item" :showList="showList" v-for="item in showList" :key="item.id">
          <showItem :baseURL="baseURL" :item="item" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import 'animate.css'
import showItem from './ShowItem.vue'
import { getData } from '@/services/get.js'
export default {
  data () {
    return {
      show: true,
      showList: [],
      name: '',
      baseURL: 'http://www.manati.cn/public'
    }
  },
  beforeMount () {
    this.changePage(name)
  },
  components: { showItem },
  methods: {
    async changePage (data) {
      this.name = data
      if (data === 'Health') {
        this.show = false
        const res = await getData({
          method: 'post',
          baseURL: this.baseURL,
          url: '/index.php/plugin/home_configuration/api_index/getArticle',
          data: { type: 2, page: 1, limit: 5 }
        })
        this.showList = res.data.data
        // console.log(this.showList)
      } else {
        this.show = true
        const res = await getData({
          method: 'post',
          baseURL: this.baseURL,
          url: '/index.php/plugin/home_configuration/api_index/getArticle',
          data: { type: 1, page: 1, limit: 5 }
        })
        this.showList = res.data.data
        // console.log(res.data.data)
      }
    }
  }
}
</script>

<style scoped>
.showcase {
  width: 100%;
  height: 16rem;
  padding-bottom: 1rem;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: content-box;
}
.introduce {
  height: 3rem;
  line-height: 3rem;
  display: flex;
  margin-bottom: 0.8rem;
  background-color: #fff;
}
/* .introduce::after {//下划线
  content: "-";
  border-bottom: 2px solid red;
  width: 2px;
  height: 2px;
} */
.exhibition-area {
  height: 13rem;
}

.introduce span {
  display: inline-block;
  text-align: center;
  font-size: 14px;
}
.animate__animated {
  --animate-duration: 0.3s;
}
.exhibition-area .item {
  width: 100%;
  height: 6rem;
  margin: 0.4rem 0;
  background-color: #fff;
}
</style>
