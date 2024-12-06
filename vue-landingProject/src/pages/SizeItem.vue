<template>
  <div class="item">
    <input class="radio" type="radio" name="name">
    <label class="item__text">
      <slot/>
    </label>
  </div>
</template>
<style scoped>
.item {
  width: 46px;
  height: 46px;
}
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
.item__text {
  color: #828282;
  font-family: Oswald, sans-serif;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase ;
  border-color: #828282;
  position: absolute;
  margin: 15px;
}
</style>
<script setup>
</script>