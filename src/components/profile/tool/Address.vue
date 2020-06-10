<template>
  <div class="address">
    <myNav :name="name" />
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return {
      name: '地址管理'
    }
  },
  components: { myNav }
}
</script>
