<template>
  <div class="showcase">
    <div class="introduce container">
      <span class="Recommend col-6" @click="changePage('Recommend')">企业简介</span>
      <span class="Health col-6" @click="changePage('Health')">疾病与健康</span>
    </div>
    <div class="exhibition-area animate__animated animate__slideInLeft" key="Recommend" v-if="show">
      <div :showList="showList" v-for="item in showList" :key="item">展示块</div>
    </div>
    <div class="exhibition-area animate__animated animate__slideInRight" key="Health" v-else>
      <div :showList="showList" v-for="item in showList" :key="item">展示块2</div>
    </div>
  </div>
</template>

<script>
import 'animate.css'
import getData from '@/services/getData.js'
import axios from 'axios'
export default {
  data () {
    return {
      show: true,
      showList: [1, 2]
    }
  },
  created () {
    axios({
      url:
        'http://www.manati.cn/public/index.php/plugin/home_configuration/api_index/getArticle',
      data: { type: 2, page: 1, limit: 5 },
      method: 'post'
    }).then(res => {
      console.log(res.data)
      return res.data
    })
  },
  methods: {
    changePage (data) {
      if (data === 'Health') {
        this.show = false
        const res = getData.getData(
          'http://www.manati.cn/public/index.php/plugin/home_configuration/api_index/getArticle',
          { data: { type: 2, page: 1, limit: 5 }, method: 'post' }
        )
        console.log(res)
      } else {
        this.show = true
        const res = getData.getData(
          'http://www.manati.cn/public/index.php/plugin/home_configuration/api_index/getArticle',
          { data: { type: 1, page: 1, limit: 5 }, method: 'post' }
        )
        console.log(res)
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
  /* background-color: rgba(65, 5, 12, 0.1); */
}

.introduce span {
  display: inline-block;
  text-align: center;
  font-size: 14px;
}
.animate__animated {
  --animate-duration: 0.3s;
}
.exhibition-area div {
  width: 100%;
  height: 6rem;
  margin: 0.4rem 0;
  background-color: #fff;
}
</style>
