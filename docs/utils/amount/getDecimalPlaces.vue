<script setup lang="ts">
import { getDecimalPlaces } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        获取数值的小数位数: {{ getDecimalPlaces(100.2394) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
