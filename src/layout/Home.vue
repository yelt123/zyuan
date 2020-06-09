<template>
  <div class="contain">
    <search />

    <div class="center">
      <carousel />
      <showcase />
      <commodity />
    </div>
  </div>
</template>
<script>
import search from '@/components/home/Search'
import carousel from '@/components/home/Carousel'
import showcase from '@/components/home/Showcase'
import commodity from '@/components/home/Commodity'
export default {
  components: {
    search,
    carousel,
    showcase,
    commodity
  }
}
</script>
<style scoped>
.contain {
  position: relative;
  height: 100rem;
}
.contain .center {
  position: absolute;
  top: 3rem;
  width: 100%;
  bottom: 0;
  height: 100%;
  background-color: rgba(39, 137, 167, 0.1);
}
</style>
