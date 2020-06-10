<template>
  <div id="app">
    <router-view />
    <bottomNav />
  </div>
</template>

<script>
import bottomNav from '@/components/home/Nav'
export default {
  name: 'App',
  components: {
    bottomNav
  },
  created () {}
}
</script>
<style scoped>
</style>
