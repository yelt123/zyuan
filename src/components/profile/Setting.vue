<template>
  <div class="setting">
    <nav-bar :name="name" />
    <div class="contain">
      <div class="contain-img">
        <div>头像</div>
        <div>
          <img :src="personalData.avatar" />
          <span>></span>
        </div>
      </div>
      <hr />
      <div class="contain-img">
        <div>昵称</div>
        <div>
          {{personalData.nickname}}
          <span>></span>
        </div>
      </div>
    </div>
    <div class="bottom">退出登录</div>
  </div>
</template>
<script>
import navBar from './NavBar'
import { mapState } from 'vuex'
export default {
  methods: {
    getFile (e) {
      console.log(e.target.files)
    }
  },
  data () {
    return {
      name: '个人设置'
    }
  },
  components: {
    navBar
  },
  computed: {
    ...mapState(['personalData'])
  }
}
</script>
<style scoped>
.setting {
  width: 100vw;
  height: 100vh;
  background-color: rgba(133, 130, 130, 0.1);
}
.contain {
  width: 100vw;

  background-color: #fff;
  margin-top: 2vh;
}
.contain-img {
  display: flex;
  justify-content: space-between;
  padding: 0 3vw;
  width: 100vw;
  height: 10vh;
  line-height: 10vh;
  /* border: 1px solid red; */
  color: rgb(96, 97, 99);
}
.contain-img img {
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  margin-right: 2vw;
}
hr {
  margin: 0;
  padding: 0;
}
.bottom{
  position: fixed;
  background-color: #fff;
  width: 100vw;
  height: 8vh;
  bottom: 0;
  text-align: center;
  line-height: 8vh;
}
</style>
