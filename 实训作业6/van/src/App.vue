<template>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <van-button type="warning">警告按钮</van-button
  ><van-button plain type="primary">朴素按钮</van-button>
  <van-button plain type="success">朴素按钮</van-button>
  <van-cell title="选择多个日期" :value="text" @click="show = true" />
  <van-calendar v-model:show="show" type="multiple" @confirm="onConfirm" />
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
const show = ref(false);

const onConfirm = (dates) => {
  show.value = false;
  text.value = `选择了 ${dates.length} 个日期`;
};
</script>

<style scoped></style>
