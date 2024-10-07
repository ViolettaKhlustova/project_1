<template>
  <div class="size">
    <span class="border-title">
  <p class="title">Size (Inches)</p>
    <a class="border"></a>
    </span>
    <div class="items">
      <SizeItem v-for="size of sizes">{{size}}</SizeItem>
    </div>
  </div>
</template>
<style scoped>
.size {
  display: flex;
  width: 95%;
  flex-direction: column;
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 205px;
}
.border {
  width: 12px;
  border-bottom: 2px solid #3f3f3f;
  margin-bottom: 40px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
}
.items {
  margin: 10px 120px 0 0;
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(4, 50px);
  gap: 10px;
  justify-content: space-between;
}
</style>
<script setup>
import SizeItem from "./SizeItem.vue";
import { ref } from "vue"
const sizes = ref([
  'osfa',
  'W26',
  'W27',
  'W28',
  'W29',
  'W30',
  'W31',
  'W32',
  'W33',
  'W34',
  'W35',
  'W36',
  'W38',
  'W40',
  'W42',
  'W44',
  'W46',
  'W48',
  'W50',
  'W52',
])
</script>