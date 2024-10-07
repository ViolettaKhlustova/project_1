<template>
  <div class="colors">
    <span class="border-title">
  <p class="title">Color</p>
    <a class="border"></a>
    </span>
    <div class="items">
      <ColorsRadioItem v-for="color in colors" :color="color"/>
    </div>
  </div>
</template>

<script setup>
import ColorsRadioItem from "./ColorsRadioItem.vue";
const props = defineProps(["colors"])
</script>

<style scoped>
.colors {
  display: flex;
  width: 95%;
  flex-direction: column;
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 270px;
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
  margin-right: 102px;
  display: grid;
  grid-template-columns: repeat(7, 27px);
  grid-template-rows: repeat(2, 27px);
  gap: 20px;
}
</style>
