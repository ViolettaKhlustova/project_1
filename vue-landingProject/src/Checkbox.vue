<template>
  <input class="checkbox" type="checkbox" name="name">
</template>
<style scoped>
.checkbox {
  appearance: none;
  width: 10px;
  height: 10px;
  border: 1px solid #828282;
  border-radius: 2px;
  outline: none;
  transition: background-color 0.1s ease-in-out;
}
.checkbox:checked::before {
  content: "\2714";
  display: flex;
  text-align: center;
  color: white;
  font-size: 12px;
  line-height: 10px;
}
.checkbox:checked {
  background-color: #000000;
}
</style>