<template>
  <div class="dress-length">
    <span class="border-title">
  <p class="title">Dress length</p>
    <a class="border"></a>
    </span>
  </div>
</template>


<style scoped>
.dress-length {
  display: flex;
  width: 95%;
  gap: 20px;
  flex-direction: column;
  border-right: 1px solid var(--gray2-divider);
}
.border-title {
  display: flex;
  flex-direction: row;
  gap: 205px;
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
</style>
<script setup>
</script>