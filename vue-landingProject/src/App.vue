<template>
  <div id="app" class="app container">
    <p class="app-title">Home / Women's Dress / Best Chose</p>
  </div>
  <div class="app-categories">
    <Brand></Brand>
    <Size></Size>
    <DressLenght></DressLenght>
    <Colors></Colors>
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
  gap: 10px;
  flex-direction: column;
  border-right: 1px solid #C4C4C4;
}
</style>

<script setup>
import Brand from "./Brand.vue";
import Size from "./Size.vue";
import DressLenght from "./DressLenght.vue";
import Colors from "./Colors.vue";
</script>
