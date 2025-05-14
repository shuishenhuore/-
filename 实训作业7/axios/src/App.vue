<template>
  <el-button @click="getdata()">点击获取数据</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="title" label="书名" width="180" />
    <el-table-column prop="author" label="作者" />
  </el-table>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

const tableData = ref([]);
function getdata() {
  axios.get("http://localhost:8000/").then((res) => {
    tableData.value = res.data;
  });
}
</script>

<style></style>
