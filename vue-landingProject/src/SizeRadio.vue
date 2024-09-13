<template>
  <input class="radio item__missing" type="radio" name="name">
</template>
<style scoped>
.radio {
  display: flex;
  appearance: none;
  width: 46px;
  height: 46px;
  border: 1px solid #C4C4C4;
  outline: none;
  transition: background-color 0.1s ease-in-out;
  background-color: transparent;
}
.radio:checked::before {
  display: flex;
  text-align: center;
  color: white;
  font-size: 12px;
  line-height: 10px;
}
.radio:checked {
  color: #000000;
  border: 2px solid #000000;
}
.item__missing {
  display: flex;
  position: absolute;
}
.item__missing::before {
  content: "";
  width: 1px;
  height: 62px;
  background-color: #c4c4c4;
  transform-origin: top right;
}
.item__missing::before {
  top: 0;
  right: 0;
  transform: rotate(-45deg);
}
</style>/
<script setup>
</script>