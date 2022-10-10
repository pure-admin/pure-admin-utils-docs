<script setup lang="ts">
import { ref } from "vue";
import { useGlobal } from "@pureadmin/utils";

let globals = ref();
const property: Record<string, any> = useGlobal();

// 可以打印$echarts，是因为在 https://github.com/xiaoxian521/pure-admin-utils-docs/blob/main/docs/.vitepress/plugins/echarts.ts#L4 这里将其挂载到全局实例上
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center">
      <n-button @click="globals = Object.keys(property)"> 获取 </n-button>
      <n-button
        text
        tag="a"
        href="https://vuejs.org/api/application.html#app-config-globalproperties"
        target="_blank"
        type="primary"
      >
        点击了解全局property详情
      </n-button>
    </n-space>
    <n-gradient-text type="info" class="mt-2">
      {{ globals }}
    </n-gradient-text>
  </naive-theme>
</template>
