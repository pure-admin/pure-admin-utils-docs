<script setup lang="ts">
import { ref } from "vue";
import { getCurrentDate } from "@pureadmin/utils";

let currentDate = ref();
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="currentDate = getCurrentDate()">
        当前的日期（年月日模式）</n-button
      >
      <n-button @click="currentDate = getCurrentDate({ type: 2 })">
        当前的日期（ - 连接符模式）</n-button
      >
      <n-button @click="currentDate = getCurrentDate({ type: 3 })">
        当前的日期（ / 连接符模式）</n-button
      >
      <n-gradient-text type="info">
        {{ currentDate }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
