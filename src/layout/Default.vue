<template>
  <div class="defaultPage">
    <keep-alive>
      <router-view />
    </keep-alive>
    <bottom-nav v-show="statusComputed" />
  </div>
</template>
<script>
import home from '@/layout/Home'
import bottomNav from '@/components/home/Nav'
export default {
  data () {
    return {
      routeStatus: ''
    }
  },
  components: {
    home,
    bottomNav
  },
  beforeUpdate () {
    // console.log(this.$route.name, this.statusWatch)
  },
  mounted () {
    document.getElementById('app').style.display = 'block'
    document.getElementById('appLoading').style.display = 'none'
  },
  computed: {
    statusComputed () {
      const status = this.$route.name
      if (status === 'Home' || status === 'Profile' || status === 'Cart') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
</style>
