<template>
  <div class="user-info" keep-alive>
    <div class="top-info">
      <div class="left">
        <img :src="userData.avatar" />
        <div class="name">{{userData.nickname}}</div>
        <div class="box">
          <div class="balance">￥{{userData.amount}}元</div>
        </div>
      </div>
      <div class="right">
        <router-link :to="{name:'Setting',query:{userData:this.userData}}" tag="div">
          <span class="iconfont icon-shezhi"></span>
        </router-link>
      </div>
    </div>
    <div class="bottom-info">
      <div class="icon">
        <span class="iconfont icon-aixin"></span>
        <span>爱心值{{userData.loveNum}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getData } from '@/services/get.js'
import { GET_PERSONALDATA } from '@/store/mutation-types'
export default {
  data () {
    return {
      userData: ''
    }
  },
  created () {
    this.getUserData()
  },
  mounted () {},
  methods: {
    async getUserData () {
      const res = await getData({
        method: 'post',
        url: '/index.php/plugin/member/api_index/personalData',
        data: {
          field: 'nickname,avatar,mobile,loveNum,integral,amount,real_name',
          uid: this.$store.state.uData.uid
        }
      })

      this.userData = res.data

      this.$store.commit({
        type: GET_PERSONALDATA,
        data: this.userData
      })
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/profile-icon/iconfont.css";

.user-info {
  height: 25%;
  border-radius: 0 0 8rem 8rem/0 0 0.53333rem 0.53333rem;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  color: #fff;
}
.top-info {
  display: flex;
  height: 60%;
  justify-content: space-between;
}
.left {
  width: 80%;
  position: relative;
  font-size: 14px;
}
.left img {
  display: inline-block;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 0;
  left: 1rem;
}
.left .name,
.left .box {
  position: absolute;
}
.left .name {
  bottom: 2rem;
  left: 6rem;
}
.left .box {
  background-color: rgba(19, 5, 5, 0.2);
  width: 4.5rem;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  left: 5rem;
  bottom: 0rem;
  border-radius: 30px;
}
.right {
  width: 20%;
}

.right .icon-shezhi {
  font-size: 26px;
  position: absolute;
  right: 1rem;
  top: 2rem;
}
.bottom-info {
  top: 1rem;
  position: relative;
  height: 40%;
  line-height: -10%;
}
.icon {
  /* transform: translate(calc(50% - 55px), 15px); */
  text-align: center;
}
.icon-aixin {
  font-size: 25px;
}
</style>
