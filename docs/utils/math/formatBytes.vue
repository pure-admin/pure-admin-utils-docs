<script setup lang="ts">
import { formatBytes } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        123456 字节保留两位小数等于 {{ formatBytes(123456) }}
        <br />
        7654321 字节保留四位小数等于 {{ formatBytes(7654321, 4) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
