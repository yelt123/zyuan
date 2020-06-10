<template>
  <div class="AddMessage">
    <myNav :name="name" />AddMessage
  </div>
</template>
<script>
import myNav from '../NavBar'
export default {
  data () {
    return {
      name: '新增记录'
    }
  },
  components: {
    myNav
  }
}
</script>
