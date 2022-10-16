<script setup lang="ts">
import { ref } from "vue"
import { monthDays } from "@pureadmin/utils"

let days = ref()
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="days = monthDays(new Date())"> 获取指定日期月份的总天数 </n-button>
      <n-gradient-text type="info">
        {{ days }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
