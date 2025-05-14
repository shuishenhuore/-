<template>
  <!-- <router-view></router-view>  -->
  <!-- 学习计划表  -->
  <div class="card">
    <!-- 标题区域 -->
    <div class="card-header">学习计划表</div>
    <!-- 提交区域 -->
    <div class="card-body">
      <form @submit.prevent="add">
        <div class="row g-4">
          <!-- 学习科目 -->
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              placeholder="请输入学习科目"
              v-model.trim="subject"
            />
          </div>
          <!-- 学习任务 -->
          <div class="col-auto">
            <textarea
              class="form-control"
              v-model.trim="content"
              placeholder=" 请输入学习内容"
              :style="{ height: '32px' }"
            ></textarea>
          </div>
          <!-- 学习地点 -->
          <div class="col-auto">
            <select class="form-select form-select-sm" v-model="selectedOption">
              <option
                :style="{ height: '32px' }"
                v-for="option in options"
                :value="option.place"
                :key="option.placeCode"
              >
                {{ option.place }}
              </option>
            </select>
          </div>
          <!-- 添加按钮 -->
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">添加</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">序号</th>
        <th scope="col">学习科目</th>
        <th scope="col">学习内容</th>
        <th scope="col">学习地点</th>
        <th scope="col">完成状态</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <th scope="row">
          {{ item.id }}
        </th>
        <td>
          {{ item.subject }}
        </td>
        <td>
          {{ item.content }}
        </td>
        <td>
          {{ item.place }}
        </td>
        <td>
          <div class="form-check form-switch">
            <input
              v-model="item.status"
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {{ item.status ? "已完成" : "未完成" }}
            </label>
          </div>
        </td>
        <td>
          <span class="span" @click="remove(item.id, item.status)">删除</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from "vue";
const list = ref([
  {
    id: "1",
    subject: "Vue.js前端实战开发",
    content: "学习指令，例如v-if、v-for、v-model等",
    place: "自习室",
    status: false,
  },
]);
function remove(id: string, status: boolean) {
  if (status) {
    list.value = list.value.filter((item) => item.id !== id);
  } else {
    alert("请完成该学习计划后再进行删除操作！");
  }
}

// 添加功能
const subject = ref("");
const content = ref("");
const nextId = ref("");
const selectedOption = ref("自习室");
const options = ref([
  { placeCode: 0, place: "自习室" },
  { placeCode: 1, place: "图书馆" },
  { placeCode: 2, place: "宿舍" },
]);

function add() {
  if (subject.value === "") {
    alert("学习科目为必填项！");
    return;
  }
  const nextid = list.value.length + 1;
  const data = {
    id: String(nextid),
    subject: subject.value,
    content: content.value,
    place: selectedOption.value,
    status: false,
  };

  list.value.push(data);
  // 设置默认值
  subject.value = "";
  content.value = "";
  selectedOption.value = "自习室";
}
</script>

<style scoped lang="less">
.span {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
