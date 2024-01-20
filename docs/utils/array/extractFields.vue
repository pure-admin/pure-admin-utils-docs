<script setup lang="ts">
import { extractFields } from "@pureadmin/utils"
let arr = [
  { name: "Mar", age: 18, sex: 'girl' },
  { name: "Tom", age: 19, sex: 'boy' },
]
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
        {{ extractFields(arr, "name") }}
      </n-gradient-text>
      提取age后的新数组
      <n-gradient-text type="info">
        {{ extractFields(arr, "age") }}
      </n-gradient-text>
      提取age、sex后的新数组
      <n-gradient-text type="info">
        {{ extractFields(arr, "age", "sex") }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
