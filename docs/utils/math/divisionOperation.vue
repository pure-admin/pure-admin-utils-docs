<script setup lang="ts">
import { divisionOperation } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        两个数值的除法运算: {{ divisionOperation(4.2, 2.1) }}
        <br />
        两个数值的除法运算（保留两位小数）:
        {{ divisionOperation(8.73, 2.16, 2) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
