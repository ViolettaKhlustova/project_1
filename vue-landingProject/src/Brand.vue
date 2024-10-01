<template>
  <div class="brand">
    <span class="border-title">
  <p class="title">Brand</p>
    <a class="border"></a>
    </span>
   <CheckBoxItem v-for="brand of brands">{{brand}}</CheckBoxItem>
  </div>
</template>


<style scoped>
.brand {
  margin: 0 39px 30px 21px ;
  display: flex;
  width: 95%;
  gap: 20px;
  flex-direction: column;
  border-right: 1px solid var(--gray2-divider);
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 260px;
}
.border {
  width: 12px;
  border-bottom: 2px solid #3f3f3f;
  margin-bottom: 55px;

}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  line-height: 68px;
  color: #000000;
  font-weight: normal;
}
</style>

<script setup>
import { ref } from "vue"
import CheckBoxItem from "./CheckBoxItem.vue";
const brands = ref([
  'State',
  'Cooper',
  'Bardot',
  'Alfani',
  'Cece',
  'Donna Ricco',
])
</script>