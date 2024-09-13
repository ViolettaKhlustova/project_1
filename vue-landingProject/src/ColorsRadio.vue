<template>
<input class="radio" type="radio" name="name">
</template>
<style scoped>
 .radio {
   display: flex;
   appearance: none;
   width: 46px;
   height: 46px;
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
</style>

<script setup>
</script>