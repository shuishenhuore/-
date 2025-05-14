<template>
  <table class="table table-striped table-bordered">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(item, index) in goodsList" :key="item.id">
        <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  goodsList: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>

<style scoped lang="less"></style>
