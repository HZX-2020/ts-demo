<template>
  <component :is="icon"></component>
</template>

<script lang='ts' setup>
import { defineProps } from 'vue'
const {icon} = defineProps<{
    icon: any
}>()
</script>

<style scoped lang='sass'>
 
</style>