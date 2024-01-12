<script setup lang="ts">
import { getKeyList } from "@pureadmin/utils";
let arr = [
  { name: "Mar", age: 18 },
  { name: "Tom", age: 19 },
  { name: "Boy", age: 20 }
];
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      原数组
      <n-gradient-text type="info">
        {{ arr }}
      </n-gradient-text>
      提取name后的新数组
      <n-gradient-text type="info">
        {{ getKeyList(arr, "name") }}
      </n-gradient-text>
      提取age后的新数组
      <n-gradient-text type="info">
        {{ getKeyList(arr, "age") }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
