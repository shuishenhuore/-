<template>
  <h1>number:{{ stores.number }}</h1>
  <button @click="add()">number++</button>
</template>

<script setup>
import { useCounterStore } from "./stores/counter";
const stores = useCounterStore();
function add() {
  stores.number += 1;
}
</script>

<style scoped lang="less"></style>
