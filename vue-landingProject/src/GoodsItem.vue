<template>
    <div class="goods-item">
      <img width="344px" height="450px" class="goods__img"
      :src="currentVariant?.image"/>
      <div class="goods-item__text">
        <p class="goods__text">top women</p>
        <p class="goods__text-name">Angels malu zip jeans slim black used</p>
        <p class="goods__text-price">{{ currentVariant?.price }}</p>
      </div>
      <div class="goods-color">
      <GoodsColorsRadioItem v-for="variant in good.variants"
                            :variant="variant"
                            v-model="checkedColor"/>
      </div>
    </div>
</template>
<script setup>
import {computed, onMounted, onBeforeUnmount, ref} from "vue";
import GoodsColorsRadioItem from "./GoodsColorsRadioItem.vue";
const props = defineProps(['good', "goods"]);
const checkedColor = ref("");

const currentVariant = computed(() => {
  return props.good.variants.find(variant => variant.colorGood === checkedColor.value);
})
const switchVariant = () => {
  const currentIndex = props.good.variants.findIndex(variant => variant.colorGood === checkedColor.value);
  const nextIndex = (currentIndex + 1) % props.good.variants.length;
  checkedColor.value = props.good.variants[nextIndex].colorGood;
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(switchVariant, 5000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

</script>
<style scoped>
.goods-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.goods__text {
  color: #BDBDBD;
  font-size: 12px;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  margin: 14px 0 0 0;
}
.goods__text-name {
  color: #000000;
  font-size: 18px;
  margin: 0 0 18px 0;
  font-family: Oswald, sans-serif;
}
.goods__text-price {
  color: #000000;
  font-size: 22px;
  margin: 0 0 16px 0;
  font-family: Oswald, sans-serif;
}
.goods-color {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>