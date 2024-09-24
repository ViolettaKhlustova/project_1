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
  gap: 205px;
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
  text-transform: capitalize;
}
</style>
<script setup>
</script>