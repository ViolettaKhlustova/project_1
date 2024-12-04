<template>
  <div class="dress-length">
    <span class="border-title">
  <p class="title">Dress length</p>
    <AppCategoriesBtn/>
    </span>
  </div>
</template>


<style scoped>
.dress-length {
  display: flex;
  width: 95%;
  max-width: 355px;
  gap: 20px;
  flex-direction: column;
  border-right: 1px solid var(--gray2-divider);
  margin-bottom: 60px;
  height: 22px;
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 202px;
}
.title {
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
  text-transform: capitalize;
}
.border {
    display: none;
    width: 12px;
    border-bottom: 2px solid #3f3f3f;
    margin-bottom: 40px;
}
.sign-plus {
  width: 12px;
  height: 12px;
  position: relative;
  margin: 35px 10px 24px 10px;
}
.sign-plus::before,
.sign-plus::after {
  content: '';
  position: absolute;
  background: #3F3F3F;
}
.sign-plus::before { /* Вертикальная линия */
  width: 2px; /* ширина линии */
  height: 100%; /* высота линии */
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.sign-plus::after { /* Горизонтальная линия */
  height: 2px; /* высота линии */
  width: 100%; /* длина линии */
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
</style>
<script setup>
import AppCategoriesBtn from "./AppCategoriesBtn.vue";
</script>