<script setup lang="ts">
import { ref } from "vue";
import { max } from "@pureadmin/utils";

let maxNum = ref();
let arr = [2, 4, 6, 8];
</script>

<template>
  <naive-theme>
    <p>原数组：{{ arr }}</p>
    <n-space className="flex items-center mt-2">
      <n-button class="!w-220px" @click="maxNum = max(arr)">
        求数字类型组成数组中的最大值
      </n-button>
      <n-gradient-text type="info" v-show="maxNum?.toString()?.length > 0">
        最大值：{{ maxNum }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
