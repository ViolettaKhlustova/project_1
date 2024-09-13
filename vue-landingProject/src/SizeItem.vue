<template>
  <div class="item">
    <SizeRadio></SizeRadio>
    <label class="item__text">
      <slot/>
    </label>
  </div>
</template>
<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 46px;
  height: 46px;
}
.item__text {
  color: #828282;
  font-family: Oswald, sans-serif;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase ;
  border-color: #828282;
  position: absolute;
  margin: 15px;
}
</style>
<script setup>
import SizeRadio from "./SizeRadio.vue";
</script>