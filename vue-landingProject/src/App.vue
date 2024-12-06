<template>
  <div id="app" class="app container">
    <div class="app-categories">
      <p class="app-title">Home / Women's Dress / Best Chose</p>
      <Brand/>
      <Size/>
      <DressLenght/>
      <Colors/>
      <PriceRange />
      <DressLenghtPlus/>
      <AboutDresses/>
    </div>
    <div class="app-goods">
      <Goods/>
    </div>
  </div>
</template>
<script setup>
import Brand from "./pages/Brand.vue";
import Size from "./pages/Size.vue";
import DressLenght from "./pages/DressLenght.vue";
import Colors from "./pages/Colors.vue";
import PriceRange from "./pages/PriceRange.vue";
import DressLenghtPlus from "./pages/DressLenght2.vue";
import AboutDresses from "./pages/AboutDresses.vue";
import Goods from "./pages/Goods.vue";
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
  width: 23%;
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

