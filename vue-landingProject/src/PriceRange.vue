<template>
<div class="price-range">
<span class="border-title">
  <p class="title">price range</p>
    <a class="border"></a>
    </span>
  <div class="price-range__slider">
  <div class="price-range__slider-text">
  <p class="text">0.00 EUR</p>
  <p class="text">250.00 EUR</p>
  </div>
  <input id="right" class="styled-slider slider-progress" type="range" min="0.00" max="250.00" value="1.00">
  <input id="left" type="range" min="0.00" max="250.00" value="0.00">
  </div>
  <div class="price-range__btn">
    <button class="btn-text">Apply</button>
  </div>
</div>
</template>
<script setup>

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
.border {
  width: 12px;
  border-bottom: 2px solid #3f3f3f;
  margin-bottom: 40px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
  text-transform: capitalize;
}
.price-range__slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

}
input[type="range"] {
  position: absolute;
  width: 100%;
}
#right {
  z-index: 1;
  width: 335px;
}
#left {
  z-index: 2;
  width: 335px;
}
.price-range__slider-text {
  display: flex;
  gap: 205px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
}
.styled-slider {
  height: 2px;
  -webkit-appearance: none;
}
.styled-slider {
  height: 12px;
  -webkit-appearance: none;
}
:root {
  --max:320px;
  --min:140px;
  --value:5px;
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 6px + var(--ratio) * (100% - 6px));
}
/*progress support*/
.styled-slider.slider-progress {
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 6px + var(--ratio) * (100% - 6px));
}
.styled-slider:focus {
  outline: none;
}
/*webkit*/
.styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 6px;
  height: 20px;
  background: #000000;
  margin-top: calc(2px * 0.5 - 20px * 0.5);
}
.styled-slider::-webkit-slider-runnable-track {
  height: 2px;
  background: #BDBDBD;
}
.styled-slider:hover::-webkit-slider-runnable-track {
  background: #BDBDBD;
}
.styled-slider:active::-webkit-slider-runnable-track {
  background: #000000;
}
.styled-slider.slider-progress::-webkit-slider-runnable-track {
  background: linear-gradient(#BDBDBD,#BDBDBD) 100% no-repeat, #000000;
}
.styled-slider.slider-progress:hover::-webkit-slider-runnable-track {
  background: linear-gradient(#000000,#000000) 100% no-repeat, #000000;
}
.styled-slider.slider-progress:active::-webkit-slider-runnable-track {
  background: linear-gradient(#000000,#000000) 100% no-repeat, #000000;
}
/*ms*/
.styled-slider::-ms-thumb {
  width: 6px;
  height: 20px;
  background: #000000;
  box-sizing: border-box;
}
.styled-slider::-ms-track {
  height: 2px;
  background: #BDBDBD;
  box-sizing: border-box;
}
.styled-slider:hover::-ms-track {
  background: #000000;
}
.styled-slider:active::-ms-track {
  background: #000000;
}
.styled-slider.slider-progress::-ms-fill-lower {
  height: 2px;
  background: #000000;
}
.styled-slider.slider-progress:hover::-ms-fill-lower {
  background: #000000;
}
.styled-slider.slider-progress:active::-ms-fill-lower {
  background: #BDBDBD;
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
