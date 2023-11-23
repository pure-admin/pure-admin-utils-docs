<script setup lang="ts">
import { ref } from "vue";
import { min } from "@pureadmin/utils";

let minNum = ref();
let arr = [2, 4, 6, 8];
</script>

<template>
  <naive-theme>
    <p>原数组：{{ arr }}</p>
    <n-space className="flex items-center mt-2">
      <n-button class="!w-220px" @click="minNum = min(arr)">
        求数字类型组成数组中的最小值
      </n-button>
      <n-gradient-text type="info" v-show="minNum?.toString()?.length > 0">
        最小值：{{ minNum }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
