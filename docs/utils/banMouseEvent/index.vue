<script setup lang="ts">
import { NButton, NSpace } from "naive-ui";
import { banMouseEvent, allowMouseEvent } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-button @click="banMouseEvent(['contextmenu'])"> 禁止右键 </n-button>
      <n-button @click="allowMouseEvent(['contextmenu'])"> 允许右键 </n-button>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="banMouseEvent(['selectstart'])"> 禁止选择 </n-button>
      <n-button @click="allowMouseEvent(['selectstart'])"> 允许选择 </n-button>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="banMouseEvent(['copy'])"> 禁止拷贝 </n-button>
      <n-button @click="allowMouseEvent(['copy'])"> 允许拷贝 </n-button>
    </n-space>

    <n-space className="flex items-center">
      <n-button @click="banMouseEvent(['contextmenu', 'selectstart', 'copy'])">
        同时禁止右键、选择、拷贝
      </n-button>
      <n-button
        @click="allowMouseEvent(['contextmenu', 'selectstart', 'copy'])"
      >
        同时允许右键、选择、拷贝
      </n-button>
    </n-space>
  </naive-theme>
</template>
