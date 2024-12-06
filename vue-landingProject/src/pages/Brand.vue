<template>
  <div class="brand">
    <span class="border-title">
  <p class="title">Brand</p>
      <BtnOpenList @click="show = !show"/>
    </span>
    <transition>
    <div class="items" v-if="show">
   <CheckBoxItem v-for="brand of brands" :key="brand">{{brand}}</CheckBoxItem>
    </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from "vue"
import CheckBoxItem from "../shared/CheckBoxItem.vue";
import BtnOpenList from "../shared/BtnOpenList.vue";
const brands = ref([
  'State',
  'Cooper',
  'Bardot',
  'Alfani',
  'Cece',
  'Donna Ricco',
])
const show = ref(false)
</script>
<style scoped>
.brand, .items {
  display: flex;
  width: 95%;
  gap: 20px;
  flex-direction: column;
  border-right: 1px solid var(--gray2-divider);
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 263px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
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

