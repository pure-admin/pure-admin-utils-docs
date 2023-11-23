<script setup lang="ts">
import { ref } from "vue";
import { rgbToHex } from "@pureadmin/utils";

let hrColor = ref();
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="hrColor = rgbToHex(154, 212, 71)">
        rgb 转 hex
      </n-button>
      <n-gradient-text type="info">
        {{ hrColor }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
