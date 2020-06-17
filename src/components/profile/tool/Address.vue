<template>
  <div class="address">
    <myNav :name="name" />

    <div class="address-top">
      <div class="userAdd" v-for="(item,index) in userAddList " :key="index">
        <div class="left">
          <div>{{item.receive_name}} {{item.receive_phone}}</div>
          <div>{{item.show_address[0]}}{{item.show_address[1]}}{{item.show_address[2]}}{{item.address}}</div>
        </div>
        <span>></span>
      </div>
    </div>
    <router-link to="/EditAddress" class="address-bottom">
      <div class="a-box">添加地址</div>
    </router-link>
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {

  created () {
    this.getData()
  },
  data () {
    return {
      name: '地址管理',
      userAddList: []
    }
  },
  methods: {
    async getData () {
      const res = await this.$axios({
        url: '/index.php/plugin/member_address/apiIndex/getAddressList',
        method: 'post',
        data: {
          uid:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImV4cCI6MTU5MjM0MTQ5MiwianRpIjoiSWpNME1HTXdOemhoT0dObU1HSmpZalF5WVRrM1pUWm1PV1UyTW1ZMU5EazVJZy5JbUpoTURkbE5ESm1ORE5rTVRnMk1EWTROVFJtTUdZeE1qZ3dNR1UzWWpNMklnLkJGclc4NEdDbkQ0X0VlQ3FiN3Fpd1BKd0dJd3hUV3BFYzB2WXNCZ2Z0ZkkifQ.SOeK1WlfclebMI2xdquMLHfr3KCCfrQuIFcszgBDlVY'
        }
      })

      this.userAddList = res.data.data
    }
  },
  components: { myNav }
}
</script>
<style scoped>
.address-top {
  background-color: rgba(131, 128, 128, 0.2);
  width: 100%;
  padding-bottom: 35rem;
  position: absolute;
}

.userAdd {
  width: 90%;
  height: 5rem;
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
}
.userAdd .left {
  float: left;
}
.userAdd .left div {
  margin: 0.6rem;
}
.userAdd span {
  position: absolute;
  top: 1.8rem;
  right: 1rem;
  display: inline-block;
}
.address-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: #fff;
}
.a-box {
  width: 90%;
  background-color: #ee0a24;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 3rem;
  border-radius: 2rem;
  text-align: center;
  line-height: 3rem;
}
</style>
