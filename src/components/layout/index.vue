<template>
  <div class="container">
    <el-container>
      <!-- 左侧导航栏 -->
      <NavMenu />
      <el-container>
        <!-- 头部 -->
        <el-header>Header</el-header>
        <!-- 主体 -->
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import { ref,reactive } from 'vue'
import NavMenu from "./navMenu.vue"
</script>

<style scoped lang='scss'>
.container {
  height: 100%;
  background: #f1f1f1;
}
</style>