<template>
  <div class="item">
      <label class="item-radio" :style="{border: modelValue === color ?
      '2px solid black' : 'none'}">
        <input class="radio"
               type="radio"
               name="filter_colors"
               :style="{backgroundColor: props.color}"
               @change="$emit('update:modelValue', $event.target.value)"
               :value="color"
               :key="color" />
      </label>
  </div>
</template>
<script setup>
import {ref} from "vue";
const props = defineProps(["color", "modelValue"]);

</script>
<style scoped>
.item {
  display: flex;
  width: 27px;
  height: 27px;
  gap: 3px;
}
.radio {
  display: flex;
  appearance: none;
  width: 17px;
  height: 17px;
  outline: none;
  margin: 3px;
}
</style>
