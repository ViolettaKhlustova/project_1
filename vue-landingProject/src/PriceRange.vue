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
  <input class="price-range__range" type="range" min="0.00" max="250.00">
  <div class="price-range__btn">
    <button class="btn-text">Apply</button>
  </div>
</div>
</div>
</template>
<style scoped>
.price-range {
  display: flex;
  width: 95%;
  flex-direction: column;
  margin: 0 39px 30px 21px ;
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 210px;
}
.border {
  width: 12px;
  border-bottom: 2px solid #3f3f3f;
  margin-bottom: 55px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
  text-transform: capitalize;
}
.price-range__slider {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price-range__slider-text {
  display: flex;
  gap: 190px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
}
.price-range__range {
  margin: 12px 39px 26px 0;
}
.price-range__btn {
  display: flex;
  justify-content: flex-end;
  margin: 0 39px 30px 0;
}
.btn-text {
  font-family: Oswald,sans-serif;
  font-size: 14px;
  line-height: 20.75px;
  letter-spacing: 0.5px;
  text-align: center;
  background-color: #F0F2F2;
  border: 2px solid #C4C4C4;
  padding: 5px 20px;
  text-transform: uppercase;
  color: #828282;
}

</style>
<script setup>
</script>