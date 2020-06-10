<template>
  <div class="ProxyRecord">
    <myNav :name="navName" />ProxyRecord
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return {
      navName: '申请记录'
    }
  },
  components: { myNav }
}
</script>
