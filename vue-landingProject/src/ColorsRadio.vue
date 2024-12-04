<template>
  <input class="radio"
         type="radio"
         :style="{backgroundColor: props.color}">
</template>
<script setup>
const props = defineProps(["color"]);
</script>
<style scoped>
.radio {
  display: flex;
  appearance: none;
  width: 17px;
  height: 17px;
  outline: none;
  margin: 3px;
}
.radio:checked {
  border: 2px solid #000000;
}
</style>