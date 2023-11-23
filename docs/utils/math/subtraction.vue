<script setup lang="ts">
import { subtraction } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        两个数值的减法运算: {{ subtraction(0.2, 0.1) }}
        <br />
        两个数值的减法运算（保留3位小数）: {{ subtraction(0.2342, 0.1233, 3) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
