<template>
  <div class="security">
    <myNav :name="name" />
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return { name: '安全中心' }
  },
  components: { myNav }
}
</script>
