<script setup lang="ts">
import { ref } from "vue";
import { numberToChinese } from "@pureadmin/utils";

let value = ref();
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-input
        v-model:value="value"
        type="number"
        placeholder="将阿拉伯数字翻译成中文数字"
        class="!w-220px"
      />
      <n-gradient-text type="info" v-show="value?.toString()?.length > 0">
        中文数字：{{ numberToChinese(value) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
