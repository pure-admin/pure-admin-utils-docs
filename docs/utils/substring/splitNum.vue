<script setup lang="ts">
import { ref } from "vue";
import { splitNum } from "@pureadmin/utils";

let character6 = ref();
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="character6 = splitNum(123456)">
        将数字拆分为单个数字组成的数组
      </n-button>
      <n-gradient-text type="info"> 原数字：123456 </n-gradient-text>
      <n-gradient-text type="error" v-show="character6?.length > 0">
        拆分后的数字：{{ character6 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
