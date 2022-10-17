<script setup lang="ts">
import { ref } from "vue"
import { average } from "@pureadmin/utils"

let averageNum = ref()
let arr = [2, 4, 6, 8]
</script>

<template>
  <naive-theme>
    <p>原数组：{{ arr }}</p>
    <n-space className="flex items-center mt-2">
      <n-button class="!w-220px" @click="averageNum = average(arr)"> 求数字类型组成数组中的平均值 </n-button>
      <n-gradient-text type="info" v-show="averageNum?.toString()?.length > 0">
        平均值：{{ averageNum }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
