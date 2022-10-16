<script setup lang="ts">
import { ref } from "vue"
import { getCurrentWeek } from "@pureadmin/utils"

let currentWeek = ref('')
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="currentWeek = getCurrentWeek()"> 获取当前是星期几 </n-button>
      <n-button @click="currentWeek = getCurrentWeek('周')"> 获取当前是周几 </n-button>
      <n-gradient-text type="info">
        {{ currentWeek }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
