<template>
  <div class="container">
    <el-container>
      <NavMenu />
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import { ref,reactive } from 'vue'
import NavMenu from "./navMenu.vue"
</script>

<style scoped lang='sess'>
.container {
  height: 100%;
}
</style>