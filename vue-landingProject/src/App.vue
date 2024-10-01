<template>
  <div id="app" class="app container">
    <p class="app-title">Home / Women's Dress / Best Chose</p>
  <div class="app-categories">
    <Brand/>
    <Size/>
    <DressLenght/>
    <Colors :colors="colors"/>
    <PriceRange/>
    <DressLenghtPlus/>
    <AboutDresses/>
  </div>
    <Goods/>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.app {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.app-title {
  margin: 0 0 0 21px;
  color: #828282;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 68px;
  text-align: left;
}
.app-categories {
  display: flex;
  width: 20%;
  flex-direction: column;
  border-right: 1px solid #C4C4C4;
}
</style>
<script setup>
import Brand from "./Brand.vue";
import Size from "./Size.vue";
import DressLenght from "./DressLenght.vue";
import Colors from "./Colors.vue";
import PriceRange from "./PriceRange.vue";
import DressLenghtPlus from "./DressLenghtPlus.vue";
import {ref} from "vue";
import AboutDresses from "./AboutDresses.vue";
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
import Goods from "./Goods.vue";
</script>
