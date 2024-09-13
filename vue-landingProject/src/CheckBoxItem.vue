<template>
  <div class="item">
    <CheckBox></CheckBox>
    <label class="item__text">
      <slot/>
    </label>
  </div>
</template>
<script setup lang="ts">
import Radio from "./Radio.vue";
import CheckBox from "./CheckBox.vue";
</script>
<style scoped>
.item {
  display: flex;
  gap: 9px;
}
.item__text {
  text-transform: uppercase;
  color: #3F3F3F;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: left;
}
</style>/