<template>
  <div class="goods">
    <div class="goods-item">
      <img class="goods__img" src="vueImg/dress_1.png">
      <p class="goods__text">top women</p>
      <p class="goods__text-name">Angels malu zip jeans slim black used</p>
      <p class="goods__text-price">139,00 EUR</p>
    </div>
  </div>
</template>


<style scoped>
.goods {
  display: grid;
  grid-template-columns: 450px 1fr;
  grid-template-rows: 350px 1fr;
  gap: 84px;
}
.goods-item {
  display: flex;
}
.goods__img {
  width: 100%;
}
.goods__text {
  color: #BDBDBD;
  font-size: 12px;
  line-height: 18px;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
}
.goods__text-name {
  color: #000000;
  font-size: 18px;
  line-height: 26px;
  font-family: Oswald, sans-serif;
}
.goods__text-price {
  color: #000000;
  font-size: 22px;
  line-height: 32px;
  font-family: Oswald, sans-serif;
}
</style>/
<script setup>
</script>

