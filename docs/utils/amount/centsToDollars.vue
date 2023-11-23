<script setup lang="ts">
import { centsToDollars } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        分转元: {{ centsToDollars(100) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
