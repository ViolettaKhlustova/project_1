<template>
  <button @click="isOpen = !isOpen" class="btn">{{ isOpen ? '-' : '+' }}</button>
</template>
<script setup>
import {ref} from "vue";
const isOpen = ref(false)
</script>
<style scoped>
.btn {
  cursor: pointer;
  width: 12px;
  height: 12px;
  font-size: 22px;
  margin: 35px 0 0 0;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #3f3f3f;
  transition: opacity 0.5s;
}
</style>