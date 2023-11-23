<script setup lang="ts">
import { ref } from "vue";
import { hexToRgb } from "@pureadmin/utils";

let hrColor = ref();
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="hrColor = hexToRgb('#9ad447')"> hex 转 rgb </n-button>
      <n-gradient-text type="info">
        {{ hrColor }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
