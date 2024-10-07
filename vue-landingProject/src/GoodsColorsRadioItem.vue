<template>
  <div class="item">
    <div class="item-border">
      <label class="item-radio">
        <input class="radio"
               type="radio"
               name="name"
               :style="{backgroundColor: props.colorGood}">
      </label>
    </div>
  </div>
</template>
<style scoped>
.item {
  display: flex;
  width: 27px;
  height: 27px;
  gap: 3px;
}
.item-border {
  border: 2px solid #000000;
  background-color: transparent;
  width: 26px;
}
.item-radio {
  height: 17px;
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
<script setup>
const props = defineProps(["colorGood"]);

</script>