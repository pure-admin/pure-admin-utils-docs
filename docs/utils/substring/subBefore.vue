<script setup lang="ts">
import { ref } from "vue";
import { subBefore } from "@pureadmin/utils";

let character1 = ref("");
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="character1 = subBefore('hello,gird', ',')">
        截取指定字符前面的值
      </n-button>
      <n-gradient-text type="info"> 原字符：hello,gird </n-gradient-text>
      <n-gradient-text type="error" v-show="String(character1).length > 0">
        截取后字符：{{ character1 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
