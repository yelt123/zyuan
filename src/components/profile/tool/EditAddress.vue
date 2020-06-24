<template>
  <div class="EditAddress">
    <nav-bar :name="name" />
    <!-- <van-switch v-model="checked" /> -->
    <div class="message-box">
      <div class="a-message-top">
        <van-field v-model="userName" label="姓名" placeholder="请输入姓名" />
        <van-field v-model="userPhone" type="digit" label="手机号" placeholder="请输入手机号" />
        <van-field
          readonly
          clickable
          name="area"
          :value="value"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            title="标题"
            @confirm="onConfirm"
            @cancel="showArea = false"
            :columns-placeholder="['请选择', '请选择', '请选择']"
          />
        </van-popup>
        <van-field v-model="address" label="详细地址" placeholder="请输入详细地址" />
        <van-field v-model="post" type="digit" label="邮政编码" placeholder="请输入邮政编码" />
      </div>
    </div>
    <div class="a-message-main">
      <div class="m-box">
        <span>设为默认地址</span>
        <van-switch class="switch" size="1.6rem" v-model="checked" />
        <!-- div. -->
      </div>
    </div>

    <div class="a-message-bottom">
      <van-button @click="commit" class="btn" type="danger">保存</van-button>
    </div>
  </div>
</template>
<script>
import navBar from '../NavBar.vue'
import addList from '@/assets/js/add.js'
export default {
  methods: {
    commit () {
      let { value, address, userName, userPhone, post } = this
      if (!value || !address || !userName || !userPhone) {
        alert('输入有误')
        return false
      }
      this.$axios({
        url: '/index.php/plugin/member_address/apiIndex/addAddress',
        method: 'post',
        data: {
          uid: this.$store.state.uData.uid,
          receive_name: userName,
          receive_phone: userPhone,
          cri_code: 110101,
          cri_name: value[2],
          address: address,
          postal_code: post,
          is_default: 1
        }
      })
      this.showAddress = { value, address, userName, userPhone, post }
      this.$router.push({
        name: 'Address',
        params: { userAdd: this.showAddress }
      })
      console.log(this.showAddress, this.$route.params)
    },
    onConfirm (values) {
      if (!values[0].code || !values[1].code || !values[2].code) {
        this.showArea = false
        return
      }

      this.value = values.map(item => item.name).join('/')
      this.showArea = false
      console.log(this.value)
    }
  },
  components: {
    navBar
  },
  updated () {},
  data () {
    return {
      name: '修改地址',
      areaList: addList,
      checked: true,
      userPhone: '',
      userName: '',
      address: '',
      post: '',
      value: '',
      showArea: false,
      showAddress: {}
      // 数据格式见 Area 组件文档
    }
  }
}
</script>
<style scoped>
.EditAddress {
  background-color: rgba(131, 128, 128, 0.1);
  width: 100%;
  bottom: 0;
  top: 0;
  position: absolute;
}
.message-box {
  background-color: #fff;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem 0;
  width: 90%;
}

.a-message-main {
  width: 100%;
  height: 4rem;
  position: relative;
  margin-top: 1rem;
}

.a-message-main .m-box {
  width: 90%;
  height: 3rem;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 3rem;
  padding: 0 1rem;
}
.a-message-main .switch {
  float: right;
  position: relative;
  top: 0.6rem;
}

.a-message-bottom {
  height: 50px;
  width: 100%;
  position: relative;
}
.btn {
  border-radius: 2rem;
  color: #fff;
  font-weight: 600;
  width: 90%;
  height: 45px;
  background-color: #ee0a24;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  outline: none;
}

.btn:focus {
  outline: none;
  outline: rgb(2, 150, 64);
}
</style>
