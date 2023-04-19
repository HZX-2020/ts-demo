<template>
  <div>
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-menu-item :index="v.url" v-for="v in menuItems" :key="v.url">
          <el-icon><Icon :icon="v.icon" /></el-icon>
          <span>{{ v.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/common/Icon.vue'
import { useMenu } from "./useMenu";

const menuItems = useMenu();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="sass"></style>
