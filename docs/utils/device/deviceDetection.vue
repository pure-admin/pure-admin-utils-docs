<script setup lang="ts">
import { ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
import { deviceDetection } from "@pureadmin/utils";

let device = ref();

useResizeObserver(document.body, () => {
  device.value = deviceDetection();
});
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info">
        当前设备类型：
        <n-gradient-text type="error">
          {{ device ? "移动端" : "pc端" }}
        </n-gradient-text>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
