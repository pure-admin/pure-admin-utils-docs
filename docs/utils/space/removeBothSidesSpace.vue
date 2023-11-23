<script setup lang="ts">
import { ref, computed } from "vue";
import { removeBothSidesSpace } from "@pureadmin/utils";

let str = ref(" i love study ");
let code = computed(() => {
  return `console.log(${str.value})`;
});
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      原字符串：
      <n-code
        :code="`console.log( i love study )`"
        language="javascript"
        inline
      />
    </n-space>

    <n-space className="flex items-center mt-2">
      转换后字符串：
      <n-code :code="code" language="javascript" inline />
    </n-space>

    <n-space className="flex items-center mt-2">
      <n-button @click="str = removeBothSidesSpace(' i love study ')">
        点击去掉字符串左右两边空格
      </n-button>
    </n-space>
  </naive-theme>
</template>
