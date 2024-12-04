<template>
  <div class="colors">
    <span class="border-title">
  <p class="title">Color</p>
      <AppCategoriesBtn @click="isOpen = !isOpen"/>
    </span>
    <transition>
    <div class="items" v-if="isOpen">
      <ColorsRadioItem
          v-for="color in colors"
          :color="color"
          v-model="selectedColor"/>
    </div>
    </transition>
  </div>
</template>
<script setup>
import ColorsRadioItem from "./ColorsRadioItem.vue";
import AppCategoriesBtn from "./AppCategoriesBtn.vue";
import {ref} from "vue";
const selectedColor = ref("")
const props = defineProps(["colors", 'selectedColor']);
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
const isOpen = ref(false);
</script>

<style scoped>
.colors {
  display: flex;
  flex-direction: column;
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 270px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
}
.items {
  margin-right: 65px;
  display: grid;
  grid-template-columns: repeat(7, 27px);
  gap: 20px;
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
