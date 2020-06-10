<template>
  <div class="extension">
    <myNav :name='name'/>
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return { name: '推广链接' }
  },
  components: { myNav }
}
</script>
