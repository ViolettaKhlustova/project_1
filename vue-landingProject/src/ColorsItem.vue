<template>
  <div class="color">
    <span class="border-title">
  <p class="title">Color</p>
    <a class="border"></a>
    </span>
    <ColorsRadio v-for="colorRadio of colorsRadio">{{colorRadio}}</ColorsRadio>
  </div>
</template>
<style scoped>
.color {
  display: flex;
  gap: 10px;
}
</style>
<script setup>
import ColorsRadio from "./ColorsRadio.vue";
import { ref } from "vue"
</script>