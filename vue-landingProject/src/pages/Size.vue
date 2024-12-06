<template>
  <div class="size">
    <span class="border-title">
  <p class="title">Size (Inches)</p>
     <BtnOpenList @click="isOpen = !isOpen"/>
    </span>
    <transition>
    <div class="items" v-if="isOpen">
      <SizeItem v-for="size of sizes">{{size}}</SizeItem>
    </div>
    </transition>
  </div>
</template>
<script setup>
import SizeItem from "./SizeItem.vue";
import { ref } from "vue"
import BtnOpenList from "../shared/BtnOpenList.vue";
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
const isOpen = ref(false)
</script>
<style scoped>
.size {
  display: flex;
  flex-direction: column;
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 205px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
}
.items {
  margin: 10px 80px 0 0;
  display: grid;
  grid-template-columns: repeat(5, 50px);
  gap: 10px;
  justify-content: space-between;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
