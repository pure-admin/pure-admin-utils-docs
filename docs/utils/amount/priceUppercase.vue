<script setup lang="ts">
import { priceUppercase } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        整数金额转大写汉字: {{ priceUppercase(1234567) }}
      </n-gradient-text>
      <n-gradient-text type="info">
        非整数金额转大写汉字: {{ priceUppercase(1234567.123) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
