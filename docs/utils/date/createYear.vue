<script setup lang="ts">
import { ref } from "vue"
import { createYear } from "@pureadmin/utils"

let yearsList = ref()
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="yearsList = createYear(2010)"> 获取从当前年份到指定开始年份的数组 </n-button>
      <n-gradient-text type="info">
        {{ yearsList }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
