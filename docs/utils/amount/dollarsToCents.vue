<script setup lang="ts">
import { dollarsToCents } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        元转分: {{ dollarsToCents(1) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
