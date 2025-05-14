<template>
  <button>后退</button>
  <h4>用户{{ id }}的详情页面</h4>
  <button @click="goBack">后退</button>
</template>
<script setup>
const props = defineProps({
  id: String,
});
</script>

<style scoped></style>
