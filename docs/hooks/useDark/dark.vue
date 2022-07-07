<script setup lang="ts">
import { NSwitch } from "naive-ui";
import { useDark } from "@pureadmin/utils";

const { isDark } = useDark();
</script>

<template>
  <n-switch v-model:value="isDark" disabled>
    <template #checked> dark </template>
    <template #unchecked> light </template>
  </n-switch>
  点击右上角的主题切换查看效果
</template>
