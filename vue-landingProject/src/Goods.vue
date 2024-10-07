<template>
  <div class="goods-select">
    <label>
      <select class="goods-select__price">
        <option>price (High to low)</option>
        <option>price (low to high)</option>
        <option>популярные</option>
        <option>высокий рейтинг</option>
        <option>по размеру скидки</option>
      </select>
    </label>
    <label>
    <select class="goods-select__quantity">
      <option>2</option>
      <option>4</option>
      <option>8</option>
      <option>16</option>
      <option>32</option>
      <option>48</option>
    </select>
    </label>
  </div>
  <div class="goods">
  <GoodsItem v-for="good in goods" :good="good"/>
  </div>
</template>

<script setup>
import GoodsItem from "./GoodsItem.vue";
import {ref} from "vue";
const goods = ref([
  {price: "139,00 EUR", colorGoods: ["#24426A", "#18574A", "#666689"], image: '/dress_1.png'},
  {price: "235,00 EUR", colorGoods: ["#88ABCB", "#FACBCE", "#A75E5D"], image: '/dress_2.png'},
  {price: "90,00 EUR", colorGoods: ["#C2BEB6", "#24426A", "#CBA13E"], image: '/dress_3.png'},
  {price: "139,00 EUR", colorGoods: ["#24426A", "#F3ECE2", "#666689"], image: '/dress_4.png'},
  {price: "235,00 EUR", colorGoods: ["#2B9FA7", "#971E34", "#666689"], image: '/dress_5.png'},
  {price: "90,00 EUR", colorGoods: ["#666689", "#292A2D", "#F3ECE2"], image: '/dress_6.png'},
  {price: "139,00 EUR", colorGoods: ["#88ABCB", "#FACBCE", "#A75E5D"], image: '/dress_7.png'},
  {price: "235,00 EUR", colorGoods: ["#F3ECE2", "#292A2D", "#AAABA7"], image: '/dress_8.png'},
  {price: "90,00 EUR", colorGoods: ["#24426A", "#18574A", "#666689"], image: '/dress_9.png'},
  {price: "139,00 EUR", colorGoods: ["#88ABCB", "#FACBCE", "#A75E5D"], image: '/dress_10.png'},
  {price: "235,00 EUR", colorGoods: ["#C2BEB6", "#24426A", "#CBA13E"], image: '/dress_11.png'},
  {price: "90,00 EUR", colorGoods: ["#24426A", "#F3ECE2", "#666689"], image: '/dress_12.png'},
])


</script>
<style scoped>
.goods-select {
  display: flex;
  height: 40px;
  gap: 20px;
  margin: 0 21px 0 30px;
  position: relative;
  right: -1140px;
}
select {
  border: 1px solid #C4C4C4;
  font-family: Oswald, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
}
.goods-select__price {
  padding: 11px 60px 11px 11px;
}
.goods-select__quantity {
  padding: 11px;
}
.goods {
  display: grid;
  grid-template-columns: repeat(4, 344px);
  grid-template-rows: repeat(3, 610px);
  margin: 0 21px 30px 0;
  gap: 49px 26px;
}
</style>

