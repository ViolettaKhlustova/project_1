<template>
  <div class="item">
      <label class="item-radio" :style="{border: modelValue === colorGood ?
      '2px solid black' : 'none'}"
             v-for="colorGood in variant">
        <input class="radio"
               type="radio"
               name="filter_color"
               :style="{backgroundColor: colorGood}"
               @change="$emit('update:modelValue', $event.target.value)"
               :value="variant.colorGood"
               :key="colorGood" />
      </label>
  </div>
</template>
<script setup>
const props = defineProps(['modelValue', "variant", "good"]);
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
