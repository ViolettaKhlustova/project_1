<template>
<div class="price-range">
<span class="border-title">
  <p class="title">price range</p>
 <AppCategoriesBtn @click="isOpen = !isOpen"/>
    </span>
  <transition>
  <div class="items" v-if="isOpen">
  <div class="wrapper">
    <div class="values">
    <span id="range1">
      {{minValue}} EUR
    </span>
      <span> &dash;</span>
      <span id="range2">
      {{maxValue}} EUR
    </span>
    </div>
    <div class="container" @mousedown="isMoving = true" @mouseup="isMoving=false"
                           @touchstart="isMoving=true" @touchend="isMoving=false">
      <input type="range" id="slider-1" min="0" max="250" :step="step" :value="minValue" @input="updateMin"/>
      <input type="range" id="slider-2" min="0" max="250" :step="step" :value="maxValue" @input="updateMax"/>
     <div class="slider-track" :class="{'changed-track': isMoving}"></div>
      <div class="add-track" :style="computedFunc"></div>
    </div>
  </div>
  <div class="price-range__btn">
    <button class="btn-text">Apply</button>
  </div>
  </div>
  </transition>
</div>
</template>
<script setup>
import {computed, ref} from "vue";
import AppCategoriesBtn from "./AppCategoriesBtn.vue";
const isOpen = ref(false);
const isMoving = ref(false);
const minValue = ref(50);
const maxValue = ref(100);
const step = ref(1);
const computedFunc = computed(() => {
    const min = (minValue.value / 250) * 100;
    const max = (maxValue.value / 250) * 100;
    return {
      left: `${min}%`,
      right: `100%`,
      width: `${max - min}%`,
      backgroundColor: "#000000",
    }
})
const updateMin = (event) => {
    if (Number(event.target.value) <= Number(maxValue.value) - 5) {
      minValue.value = Number(event.target.value);
    }
  };
 const updateMax = (event) => {
    if (Number(event.target.value) >= Number(minValue.value) + 5) {
      maxValue.value = Number(event.target.value);
    }
  };
</script>
<style scoped>
.price-range {
  display: flex;
  width: 95%;
  flex-direction: column;
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 213px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
  text-transform: capitalize;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.wrapper {
  position: relative;
  width: 95%;
}
.values {
  background-color: #000000;
  width: 35%;
  position: relative;
  margin: auto;
  padding: 10px 5px;
  border-radius: 5px;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #ffffff;
}
.values:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border-top: 15px solid #000000;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  margin: auto;
  bottom: -14px;
  left: 0;
  right: 0;
}
.container {
  position: relative;
  width: 100%;
  height: 70px;
}
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}
.slider-track {
  width: 100%;
  height: 2px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: #BDBDBD;
  z-index: -1;
}
.changed-track {
  width: 100%;
  height: 2px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-color: #000000;
}
.add-track {
  height: 2px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 20%;
  right: 40%;
  background: #000000;
}
input[type=range]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 0;
  background-color: #BDBDBD;
}
input[type=range]::-moz-range-track {
  -moz-appearance: none;
  height: 2px;
  background-color: #BDBDBD;
}
input[type=range]::-ms-track {
  appearance: none;
  height: 2px;
  background-color: #BDBDBD;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 6px;
  background-color: #000000;
  cursor: pointer;
  margin-top: -5px;
  pointer-events: auto;
}
input[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  height: 20px;
  width: 6px;
  background-color: #000000;
  cursor: pointer;
  pointer-events: auto;
}
input[type=range]::-ms-thumb {
  appearance: none;
  height: 20px;
  width: 6px;
  cursor: pointer;
  background-color: #000000;
  pointer-events: auto;
}
input[type=range]:active::-webkit-slider-thumb {
  background-color: #ffffff;
  border: 2px solid #000000;
}
/*Button*/
.price-range__btn {
  display: flex;
  justify-content: flex-end;
  margin: 0 39px 30px 0;
}
.btn-text {
  font-family: Oswald,sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  text-align: center;
  background-color: #F0F2F2;
  border: 2px solid #C4C4C4;
  padding: 5px 20px;
  text-transform: uppercase;
  color: #828282;
}
</style>
