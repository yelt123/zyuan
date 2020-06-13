<template>
  <div class="defaultPage">
    <router-view />
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
