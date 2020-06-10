<template>
  <div class="wallet">
    <myNav :name="name" />
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return { name: '我的钱包' }
  },
  components: { myNav }
}
</script>
