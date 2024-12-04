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
  { id:1,
    name: "dress1",
    variants: [
      {colorGood: "#24426A", price: "139,00 EUR", image:'/dress_1.png'},
      {colorGood: "#18574A", price: "235,00 EUR", image:'/dress_2.png'},
      {colorGood: "#666689", price: "90,00 EUR", image:'/dress_3.png'}
    ]
  },
  { id:2,
    name: "dress2",
    variants: [
      {colorGood: "#88ABCB", price: "235,00 EUR", image:'/dress_2.png'},
      {colorGood: "#FACBCE", price: "90,00 EUR", image:'/dress_3.png'},
      {colorGood: "#A75E5D", price: "139,00 EUR", image:'/dress_4.png'}
    ]
  },
  { id:3,
    name: "dress3",
    variants: [
      {colorGood: "#C2BEB6", price: "90,00 EUR", image:'/dress_3.png'},
      {colorGood: "#24426A", price: "139,00 EUR", image:'/dress_4.png'},
      {colorGood: "#CBA13E", price: "235,00 EUR", image:'/dress_5.png'}
    ]
  },
  { id:4,
    name: "dress4",
    variants: [
      {colorGood: "#24426A", price: "139,00 EUR", image:'/dress_4.png'},
      {colorGood: "#F3ECE2", price: "235,00 EUR", image:'/dress_5.png'},
      {colorGood: "#666689", price: "90,00 EUR", image:'/dress_6.png'}
    ]
  },
  { id:5,
    name: "dress5",
    variants: [
      {colorGood: "#2B9FA7", price: "235,00 EUR", image:'/dress_5.png'},
      {colorGood: "#971E34", price: "90,00 EUR", image:'/dress_6.png'},
      {colorGood: "#666689", price: "90,00 EUR", image:'/dress_7.png'}
    ]
  },
  { id:6,
    name: "dress6",
    variants: [
      {colorGood: "#666689", price: "90,00 EUR", image:'/dress_6.png'},
      {colorGood: "#292A2D", price: "139,00 EUR", image:'/dress_7.png'},
      {colorGood: "#F3ECE2", price: "235,00 EUR", image:'/dress_8.png'}
    ]
  },
  { id:7,
    name: "dress7",
    variants: [
      {colorGood: "#88ABCB", price: "139,00 EUR", image:'/dress_7.png'},
      {colorGood: "#FACBCE", price: "235,00 EUR", image:'/dress_8.png'},
      {colorGood: "#A75E5D", price: "90,00 EUR", image:'/dress_9.png'}
    ]
  },
  { id:8,
    name: "dress8",
    variants: [
      {colorGood: "#F3ECE2", price: "235,00 EUR", image:'/dress_8.png'},
      {colorGood: "#292A2D", price: "90,00 EUR", image:'/dress_9.png'},
      {colorGood: "#AAABA7", price: "139,00 EUR", image:'/dress_10.png'}
    ]
  },
  { id:9,
    name: "dress9",
    variants: [
      {colorGood: "#24426A", price: "90,00 EUR", image:'/dress_9.png'},
      {colorGood: "#18574A", price: "235,00 EUR", image:'/dress_10.png'},
      {colorGood: "#666689", price: "90,00 EUR", image:'/dress_11.png'}
    ]
  },
  { id:10,
    name: "dress10",
    variants: [
      {colorGood: "#88ABCB", price: "139,00 EUR", image:'/dress_10.png'},
      {colorGood: "#FACBCE", price: "235,00 EUR", image:'/dress_11.png'},
      {colorGood: "#A75E5D", price: "90,00 EUR", image:'/dress_12.png'}
    ]
  },
  { id:11,
    name: "dress11",
    variants: [
      {colorGood: "#C2BEB6", price: "235,00 EUR", image:'/dress_11.png'},
      {colorGood: "#24426A", price: "90,00 EUR", image:'/dress_12.png'},
      {colorGood: "#CBA13E", price: "139,00 EUR", image:'/dress_1.png'}
    ]
  },
  { id:12,
    name: "dress12",
    variants: [
    {colorGood: "#24426A", price: "90,00 EUR", image:'/dress_12.png'},
    {colorGood: "#F3ECE2", price: "139,00 EUR", image:'/dress_1.png'},
    {colorGood: "#666689", price: "235,00 EUR", image:'/dress_2.png'}
    ]
  }
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

