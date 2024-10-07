<template>
    <div class="goods-item">
      <img width="344px" height="450px" class="goods__img"
       :src="good.image"/>
      <div class="goods-item__text">
        <p class="goods__text">top women</p>
        <p class="goods__text-name">Angels malu zip jeans slim black used</p>
        <p class="goods__text-price" :price="good.price">{{good.price}}</p>
      </div>
      <div class="goods-color">
      <GoodsColorsRadioItem v-for="colorGood in good.colorGoods" :colorGood="colorGood"/>
      </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import GoodsColorsRadioItem from "./GoodsColorsRadioItem.vue";
const props = defineProps(["good"]);
</script>

<style scoped>
.goods-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.goods__text {
  color: #BDBDBD;
  font-size: 12px;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  margin: 14px 0 0 0;
}
.goods__text-name {
  color: #000000;
  font-size: 18px;
  margin: 0 0 18px 0;
  font-family: Oswald, sans-serif;
}
.goods__text-price {
  color: #000000;
  font-size: 22px;
  margin: 0 0 16px 0;
  font-family: Oswald, sans-serif;
}
.goods-color {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>