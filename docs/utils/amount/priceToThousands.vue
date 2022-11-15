<script setup lang="ts">
import { priceToThousands } from "@pureadmin/utils"
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        格式化金额，三位加一个逗号: {{ priceToThousands(1234567) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
