<script setup lang="ts">
import { ref } from "vue";
import { delay } from "@pureadmin/utils";

let text = ref("4秒后函数执行");

delay(4000).then(() => {
  text.value = "函数被执行花费4秒";
});
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-gradient-text type="info">
        {{ text }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
