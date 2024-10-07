<template>
  <div id="app" class="app container">
    <div class="app-categories">
      <p class="app-title">Home / Women's Dress / Best Chose</p>
      <Brand/>
      <Size/>
      <DressLenght/>
      <Colors :colors="colors" />
      <PriceRange/>
      <DressLenghtPlus/>
      <AboutDresses/>
    </div>
    <div class="app-goods">
      <Goods/>
    </div>
  </div>
</template>

<script setup>
import Brand from "./Brand.vue";
import Size from "./Size.vue";
import DressLenght from "./DressLenght.vue";
import Colors from "./Colors.vue";
import PriceRange from "./PriceRange.vue";
import DressLenghtPlus from "./DressLenghtPlus.vue";
import AboutDresses from "./AboutDresses.vue";
import Goods from "./Goods.vue";
import {ref} from "vue";
const colors = ref([
  "#292A2D",
  "#F3ECE2",
  "#24426A",
  "#18574A",
  "#666689",
  '#C2BEB6',
  "#AAABA7",
  "#971E34",
  "#CBA13E",
  "#73513C",
  "#DAB1B1",
  "#2B9FA7",
])

</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.app {
  display: flex;
  justify-content: space-between;
  margin: 30px 21px 0 21px;
}
.app-title {
  color: #828282;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: left;
}
.app-categories {
  display: flex;
  width: 20%;
  gap: 10px;
  flex-direction: column;
  border-right: 1px solid #C4C4C4;
}
.app-goods {
  display: flex;
  flex-wrap: wrap;
  margin: 0 21px 45px 30px;
  gap: 20px;
}
</style>

