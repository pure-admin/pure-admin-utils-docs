<script setup lang="ts">
import { computed } from "vue";
import { intersection } from "@pureadmin/utils";

let arr1 = [1, 2, "3"];
let arr2 = [1, 2, "3", 4, 10];
let arr = [{ name: "Jack" }, 1, 2, 3, 4, 5, 6, "3", "1"];

function stringify(val) {
  return JSON.stringify(val);
}

let text = computed(
  () =>
    stringify(arr) +
    "、" +
    stringify(arr1) +
    "、" +
    stringify(arr2) +
    " 的交集为 " +
    stringify(intersection(arr, arr1, arr2))
);
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-gradient-text type="info">
        {{ text }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
