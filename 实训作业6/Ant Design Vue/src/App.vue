<template>
  <a-card title="Default size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </a-card>
  <br />
  <a-card size="small" title="Small size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </a-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>
