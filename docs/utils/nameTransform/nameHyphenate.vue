<script setup lang="ts">
import { ref } from "vue";
import { nameHyphenate } from "@pureadmin/utils";

let name = ref("iLoveStudy");
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="name = nameHyphenate(name)">
        驼峰命名转横线命名
      </n-button>
      <n-button @click="name = 'iLoveStudy'"> 恢复初始值 </n-button>
      <n-gradient-text type="info">
        {{ name }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
