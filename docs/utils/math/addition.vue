<script setup lang="ts">
import { addition } from "@pureadmin/utils"
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        两个数值的加法运算: {{ addition(0.1, 0.2) }}
        <br>
        两个数值的加法运算（保留两位小数）: {{ addition(0.126, 0.238, 2) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
