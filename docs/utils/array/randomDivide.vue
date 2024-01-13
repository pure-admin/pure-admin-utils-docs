<script setup lang="ts">
import { ref } from "vue";
import { sum, randomDivide } from "@pureadmin/utils";

let arr = ref([]);

/** 点击随机分配 */
function onClick() {
  arr.value = randomDivide(900, 20);
}

/** 点击随机递增分配 */
function onAscClick() {
  arr.value = randomDivide(900, 20, { order: "asc" });
}

/** 点击随机递减分配 */
function onDescClick() {
  arr.value = randomDivide(900, 20, { order: "desc" });
}

onClick();
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-button @click="onClick"> 点击随机分配 </n-button>
      <n-button @click="onAscClick"> 点击随机递增分配 </n-button>
      <n-button @click="onDescClick"> 点击随机递减分配 </n-button>
      <n-gradient-text type="info">
        {{ arr }}
      </n-gradient-text>
      <n-gradient-text type="info"> 和为：{{ sum(arr) }} </n-gradient-text>
      <n-gradient-text type="info"> 长度：{{ arr.length }} </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
