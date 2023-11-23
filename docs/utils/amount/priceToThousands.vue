<script setup lang="ts">
import { priceToThousands } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-gradient-text type="info">
        123456789 格式化
        <span className="text-red">{{ priceToThousands(123456789) }}</span>
      </n-gradient-text>
      <n-gradient-text type="info">
        123456789 格式化并保留两位小数
        <span className="text-red">{{
          priceToThousands(123456789, { digit: 2 })
        }}</span>
      </n-gradient-text>
      <n-gradient-text type="info">
        123456789.567 格式化并保留两位小数
        <span className="text-red">{{
          priceToThousands(123456789.567, { digit: 2 })
        }}</span>
      </n-gradient-text>
      <n-gradient-text type="info">
        123456789.567 格式化并保留两位小数且小数位进行四舍五入
        <span className="text-red">
          {{ priceToThousands(123456789.567, { digit: 2, round: true }) }}
        </span>
      </n-gradient-text>
      <n-gradient-text type="info">
        123456789.567 格式化并保留五位小数
        <span className="text-red">{{
          priceToThousands(123456789.567, { digit: 5 })
        }}</span>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
