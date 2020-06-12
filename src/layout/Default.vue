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
  }
}
</script>
<style scoped>
</style>
