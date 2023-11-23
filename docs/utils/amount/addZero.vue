<script setup lang="ts">
import { addZero } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        加 .00 后的数值 {{ addZero(123) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
