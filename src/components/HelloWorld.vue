<script setup>
import productAPI from "../api/factory/Product";

const fetchProducts = async () => {
  const res = await productAPI.getAllProducts();
  console.log(res);
};
fetchProducts();
</script>

<template>
  <div>hello world</div>
</template>

<style scoped></style>
