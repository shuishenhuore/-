<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <my-header></my-header>
    <!-- 主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏区域 -->
      <my-aside></my-aside>
      <!-- 右侧内容主体区域 -->
      <div class="home-main-body">
        <!-- 路由的视图 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
// 头部组件
import MyHeader from "./subcomponents/MyHeader.vue";
// 左侧边导航组件
import MyAside from "./subcomponents/MyAside.vue";
</script>
<style scoped></style>
