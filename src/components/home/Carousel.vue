<template>
  <div class="carousel">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner container">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="http://www.manati.cn/public/plugins/home_configuration/view/public/img/202005121249019450.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="http://www.manati.cn/public/plugins/home_configuration/view/public/img/202005121155205431.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="http://www.manati.cn/public/plugins/home_configuration/view/public/img/202005121410448794.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.carousel {
  height: 10rem;
  width: 100%;
}
.container {
  padding: 0 !important;
}
.carousel-item {
  width: 100%;
  height: 10rem;
}

</style>
