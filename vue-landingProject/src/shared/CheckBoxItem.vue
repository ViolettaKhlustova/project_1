<template>
  <div class="item">
    <input class="checkbox" type="checkbox" name="name">
    <label class="item__text">
      <slot/>
    </label>
  </div>
</template>
<script setup>
</script>
<style scoped>
.item {
  display: flex;
  gap: 9px;
}
.checkbox {
  appearance: none;
  width: 10px;
  height: 10px;
  border: 1px solid #828282;
  border-radius: 2px;
  outline: none;
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
.item__text {
  text-transform: uppercase;
  color: #3F3F3F;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: left;
}
</style>