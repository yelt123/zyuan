<template>
  <div class="defaultPage">
    <router-view />
    <bottom-nav />
  </div>
</template>
<script>
import home from '@/layout/Home'
import bottomNav from '@/components/home/Nav'
export default {
  components: {
    home,
    bottomNav
  },
  created () {
    this.pathType()
  },
  methods: {
    pathType () {
      console.log(this.$route)
    }
  }
}
</script>
<style scoped>
</style>
