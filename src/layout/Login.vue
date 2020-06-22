<template>
  <div class="Login">
    <div class="Login-box">
      <div class="logo">
        <img v-if="loginData.SEO" :src="loginData.SEO.img_url" />
      </div>
      <div class="commit-box">
        <input type="text" v-model="username" name="username" placeholder="请输入用户名" />
        <div v-show="message" class="message">{{message}}</div>
        <input type="password" v-model="password" name="password" placeholder="请输入密码" />
        <div v-show="pass" class="pass">{{pass}}</div>
      </div>
      <!-- 用验证码登录 -->
      <button type="sumbit" @click="handleClick">{{btnText}}</button>
    </div>
  </div>
</template>
<script>
import auth from '@/utils/auth.js'

export default {
  methods: {
    async handleClick () {
      // console.log(this.$axios)
      if (!this.username) {
        this.message = '请输入账号'
      } else if (!this.password) {
        this.pass = '请输入密码'
      }
      const res = await this.$axios({
        url: '/index.php/plugin/member/api_index/accountLogin',
        method: 'post',
        data: {
          account: this.username,
          password: this.password
        }
      })

      if (res.data.status === 'success' && res.data.code === 200) {
        this.userData = res.data
        auth.setLogin()
        this.$router.push({
          name: 'Home',
          params: { userId: this.userData.data }
        })
      } else if (res.data.status === 'error' && res.data.code === -1) {
        this.message = res.data.message
      } else if (res.data.status === 'error' && res.data.code === -3) {
        this.pass = res.data.message
      }
    },
    async getData () {
      const res = await this.$axios({
        url: '/index.php/plugin/site_configuration/apiIndex/getInfo',
        method: 'post'
      })
      this.loginData = res.data.data
    }
  },

  created () {
    this.getData()
  },
  beforeUpdate () {
    // console.log(this.userData)
  },
  data () {
    return {
      isLogin: auth.isLogin(),
      userData: '',
      loginData: {},
      username: '',
      password: '',
      message: '',
      pass: ''
    }
  },
  watch: {
    username: function () {
      this.message = ''
    },
    password: function () {
      this.pass = ''
    }
  },
  computed: {
    btnText () {
      return this.isLogin ? '取消登录' : '登录'
    }
  }
}
</script>
<style scoped>
.Login {
  width: 100%;
  height: 100vh;
  position: relative;
}
.Login-box {
  position: absolute;
  width: 80vw;
  left: 50%;
  top: 15vh;
  transform: translateX(-50%);
}
.logo img {
  width: 35vw;
  border-radius: 50%;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  /* height:; */
}
.commit-box {
  width: 100%;
  position: relative;
  top: 10vh;
  height: 10vh;
}
.commit-box input {
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(228, 220, 220, 0.3);
  width: 100%;
  height: 5vh;
  padding-left: 5vw;
  margin-bottom: 3vh;
  box-shadow: 0 0 0px 1000px #fff inset !important;
}

.Login-box button {
  position: relative;
  background: none;
  outline: none;
  border: none;
  border-color: rgb(126, 201, 187);
  background: rgb(126, 201, 187);
  width: 100%;
  height: 8vh;
  top: 28vh;
  border-radius: 2rem;
  color: #fff;
}
.message,
.pass {
  color: rgba(253, 5, 5, 0.7);
  font-size: 14px;
  position: absolute;
  left: 5vw;
}
.message {
  top: 5vh;
}
.pass {
  top: 13vh;
}
</style>
