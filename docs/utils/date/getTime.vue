<script setup lang="ts">
import { getTime } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        60 秒等于 {{ getTime(60, false).m }} 分钟
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        4233600 秒等于 {{ getTime(4233600).h }} 小时
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        299.099375 秒等于 {{ getTime(299.099375).h }}:{{
          getTime(299.099375).m
        }}:{{ getTime(299.099375).s }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
