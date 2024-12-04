<template>
  <div class="dress-length">
    <span class="border-title">
    <p class="title">dress lenght</p>
      <AppCategoriesBtn @click="isOpen = !isOpen"/>
    </span>
    <transition>
    <div class="items" v-if="isOpen">
    <CheckBoxItem v-for="lengthDress of lengthDresses">{{lengthDress}}</CheckBoxItem>
    </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from "vue"
import CheckBoxItem from "./CheckBoxItem.vue";
import AppCategoriesBtn from "./AppCategoriesBtn.vue";
const lengthDresses = ref([
  'short',
  'knee lenght',
  'hight low',
  'long',
  'midi',
])
const isOpen = ref(false);
</script>
<style scoped>
.dress-length, .items {
  display: flex;
  width: 95%;
  gap: 20px;
  flex-direction: column;
  border-right: 1px solid var(--gray2-divider);
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 202px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
  text-transform: capitalize;
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

