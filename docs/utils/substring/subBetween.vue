<script setup lang="ts">
import { ref } from "vue";
import { subBetween } from "@pureadmin/utils";

let character4 = ref("");
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="character4 = subBetween('i love you', 'i ', ' you')">
        截取指定两个字符之间的值
      </n-button>
      <n-gradient-text type="info"> 原字符：i love you </n-gradient-text>
      <n-gradient-text type="error" v-show="character4?.length > 0">
        截取后字符：{{ character4 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
