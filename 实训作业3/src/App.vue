<template>
  <ToDoHeader @addTodo="addTodo"></ToDoHeader>
  <ToDoMain :list="showList" @delTodo="delToDo" />
  <ToDoFooter
    :lastLength="lastLength"
    :status="status"
    @updateStatus="updateStatus"
  />
</template>
<script setup>
import ToDoMain from "./components/ToDoMain.vue";
import ToDoFooter from "./components/ToDoFooter.vue";
import ToDoHeader from "./components/ToDoHeader.vue";
import { computed, ref } from "vue";

const list = ref([
  { id: 1, name: "晨练", done: false },
  { id: 2, name: "练书法", done: true },
]);
const addTodo = (name) => {
  list.value.push({ name, done: false, id: Math.random() * 1000 });
};

const delToDo = (id) => {
  list.value = list.value.filter((item) => item.id !== id);
};

const lastLength = computed(() => {
  return list.value.filter((item) => !item.done).length;
});

const status = ref("all");

const showList = computed(() => {
  if (status.value === "all") {
    return list.value;
  }
  if (status.value === "active") {
    return list.value.filter((item) => !item.done);
  }
  if (status.value === "completed") {
    return list.value.filter((item) => item.done);
  }
});
const updateStatus = (status1) => {
  status.value = status1; // 将子组件的状态赋值给父组件
};
</script>
