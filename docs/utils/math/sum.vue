<script setup lang="ts">
import { ref } from "vue";
import { sum } from "@pureadmin/utils";

let sumNum = ref();
let arr = [2, 4, 6, 8];
</script>

<template>
  <naive-theme>
    <p>原数组：{{ arr }}</p>
    <n-space className="flex items-center mt-2">
      <n-button class="!w-220px" @click="sumNum = sum(arr)">
        求数字类型组成数组中的和
      </n-button>
      <n-gradient-text type="info" v-show="sumNum?.toString()?.length > 0">
        和：{{ sumNum }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
