<template>
  <div class="message">
    <myNav :name="name" :logo="logo" />
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return {
      name: '留言板',
      logo: '新增'
    }
  },
  components: { myNav }
}
</script>
