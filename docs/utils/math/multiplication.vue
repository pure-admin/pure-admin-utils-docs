<script setup lang="ts">
import { multiplication } from "@pureadmin/utils"
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        两个数值的乘法运算: {{ multiplication(1.2, 2.1) }}
        <br>
        两个数值的乘法运算（保留四位小数）: {{ multiplication(1.27342, 2.12306, 4) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
