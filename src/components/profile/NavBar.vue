<template>
  <div class="nav-bar">
    <div class="nav-box">
      <span class="icon" @click="onclick">
        <svg
          t="1591774748391"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5161"
          width="25"
          height="25"
        >
          <path
            d="M256.05 512.904l322.21-322.646 45.119 45.204-322.21 322.646z"
            p-id="5162"
            :fill="color"
          />
          <path
            d="M301.189 467.719l316.599 317.035-45.12 45.203-316.599-317.035z"
            p-id="5163"
            :fill="color"
          />
        </svg>
      </span>
      <span class="nav-bar-title">{{name}}</span>
      <span class="right" @click="noClickrRight(logo)">{{logo}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      color: '#1989fa'
    }
  },
  created () {
    this.color = this.$route.path === '/wallet' ? '#fff' : '#1989fa'
  },
  props: {
    logo: { require: true },
    name: { require: true }
  },
  methods: {
    onclick () {
      this.$router.go(-1)
    },
    noClickrRight (data) {
      switch (data) {
        case '申请记录':
          this.$router.push({
            path: '/ProxyRecord'
          })
          break
        case '新增':
          this.$router.push({
            path: '/AddMessage'
          })
          break
        case '刷新':
          this.$router.go(0)
      }
    }
  }
}
</script>
<style scoped>
.nav-box {
  width: 100%;
  height: 60px;
  position: relative;
  background-color: #fff;
}
.icon {
  position: absolute;
  top: 8px;
  left: 5px;
}
.nav-bar-title {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.right {
  position: absolute;
  top: 17px;
  right: 17px;
  color: #1989fa;
  /* border: 1px solid red; */
  height: 25px;
}
</style>
