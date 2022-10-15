<script setup lang="ts">
import { banMouseEvent } from "@pureadmin/utils"
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-button @click="banMouseEvent(['contextmenu'])"> 禁止右键 </n-button>
      <n-button @click="banMouseEvent(['selectstart'])"> 禁止选择 </n-button>
      <n-button @click="banMouseEvent(['copy'])"> 禁止拷贝 </n-button>
      <n-button @click="banMouseEvent(['contextmenu', 'selectstart', 'copy'])">
        同时禁止右键、选择、拷贝
      </n-button>
    </n-space>
  </naive-theme>
</template>
