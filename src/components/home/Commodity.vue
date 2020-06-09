<template>
  <div class="commodity">
    <div class="commodity-img">
      <img
        src="http://www.manati.cn/public/plugins/goods/view/public/image/goodsimg/20200512/8c346512bccc794c9667dee9fc0c9086.jpg"
      />
    </div>

    <div class="right">
      <div class="product-introduction">
        <div class="name">红茶菌</div>
        <div
          class="introduction"
        >红茶菌又名“海宝”、“胃宝”，是用糖、茶、水加菌种经发酵后生成的对人体有益的物质，其本身的酸度又抑制了有害细菌的生长，对人身体健康非常有益的效果，尤其对萎缩性胃炎、胃溃疡疑难病有很好的治疗作用，而且还有调节血压、改善睡眠、预防治疗各种疾病的效果。</div>
      </div>
      <div class="price">188.00</div>
    </div>
  </div>
</template>
<style scoped>
.commodity {
  background-color: #fff;
  height: 8rem;
  position: relative;
}
.commodity-img {
  position: absolute;
  padding: 1rem;
  width: 6rem;
  height: 6rem;
}
.commodity-img img {
  width: 6rem;
  height: 6rem;
}
.right {
  position: absolute;
  height: 7rem;
  left: 8rem;
  top: 1rem;
}
.name {
  font-size: 0.9rem;
}
.introduction {
  font-size: 0.8rem;
  width: 12rem;
  height: 2.5rem;
  color: #969799;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
.price {
  color: red;
  font-weight: 600;
}
</style>
