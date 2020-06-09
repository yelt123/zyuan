<template>
  <div class="showcase">
    <div class="introduce container">
      <span class="Recommend col-6" @click="changePage('Recommend')">企业简介</span>
      <span class="Health col-6" @click="changePage('Health')">疾病与健康</span>
    </div>
    <div class="exhibition-area animate__animated animate__slideInLeft" key="Recommend" v-if="show">
      <div :showList="showList" v-for="item in showList" :key="item">1</div>
    </div>
    <div class="exhibition-area animate__animated animate__slideInRight" key="Health" v-else>展示区2</div>
  </div>
</template>

<script>
import 'animate.css'
import services from '@/services/getData.js'
export default {
  data () {
    return {
      show: true,
      showList: [1, 2]
    }
  },
  created () {
    const data = services.getData(
      'http://www.manati.cn/public/index.php/plugin/home_configuration/api_index/getArticle'
    )
    console.log(data)
    // console.log(services.getData('../../assets/data/MallData.json'))
  },
  methods: {
    changePage (data) {
      if (data === 'Health') {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
}
</script>

<style scoped>
.showcase {
  width: 100%;
  height: 16rem;
  margin-bottom: 1rem;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: content-box;
  background-color: #fff;
}
.introduce {
  height: 3rem;
  line-height: 3rem;
  display: flex;
}
/* .introduce::after {//下划线
  content: "-";
  border-bottom: 2px solid red;
  width: 2px;
  height: 2px;
} */
.exhibition-area {
  height: 13rem;
  background-color: rgba(65, 5, 12, 0.1);
}

.introduce span {
  display: inline-block;
  text-align: center;
  font-size: 14px;
}
.animate__animated {
  --animate-duration: 0.3s;
}
</style>
