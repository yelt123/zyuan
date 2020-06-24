<template>
  <div class="profile">
    <userInfo />
    <transactions />
    <tool />
  </div>
</template>
<script>
import tool from '@/components/profile/Tool.vue'
import transactions from '@/components/profile/Transactions.vue'
import userInfo from '@/components/profile/UserInfo.vue'
export default {
  created () {
    console.log(this.$store.state)
  },
  data () {
    return {}
  },

  components: { tool, transactions, userInfo }
}
</script>
<style scoped>
.profile {
  width: 100%;
  height: 38rem;
  background-color: rgba(75, 68, 51, 0.1);
}
</style>
