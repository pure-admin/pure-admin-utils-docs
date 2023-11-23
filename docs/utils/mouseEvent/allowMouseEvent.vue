<script setup lang="ts">
import { allowMouseEvent } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-button @click="allowMouseEvent(['contextmenu'])"> 允许右键 </n-button>
      <n-button @click="allowMouseEvent(['selectstart'])"> 允许选择 </n-button>
      <n-button @click="allowMouseEvent(['copy'])"> 允许拷贝 </n-button>
      <n-button
        @click="allowMouseEvent(['contextmenu', 'selectstart', 'copy'])"
      >
        同时允许右键、选择、拷贝
      </n-button>
    </n-space>
  </naive-theme>
</template>
