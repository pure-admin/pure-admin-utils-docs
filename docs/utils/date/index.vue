<script setup lang="ts">
import { ref } from "vue"
import { NButton, NSpace, NGradientText } from "naive-ui"
import { getCurrentWeek, monthDays, createYear, getCurrentDate } from "@pureadmin/utils"

let days = ref()
let yearsList = ref()
let currentDate = ref()
let currentWeek = ref('')
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-button @click="currentWeek = getCurrentWeek()"> 获取当前是星期几 </n-button>
      <n-button @click="currentWeek = getCurrentWeek('周')"> 获取当前是周几 </n-button>
      <n-gradient-text type="info">
        {{ currentWeek }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="days = monthDays(new Date())"> 获取指定日期月份的总天数 </n-button>
      <n-gradient-text type="info">
        {{ days }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="yearsList = createYear(2010)"> 获取从当前年份到指定开始年份的数组 </n-button>
      <n-gradient-text type="info">
        {{ yearsList }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="currentDate = getCurrentDate()"> 当前的日期（年月日模式）</n-button>
      <n-button @click="currentDate = getCurrentDate({ type: 2 })"> 当前的日期（ - 连接符模式）</n-button>
      <n-button @click="currentDate = getCurrentDate({ type: 3 })"> 当前的日期（ / 连接符模式）</n-button>
      <n-gradient-text type="info">
        {{ currentDate }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
