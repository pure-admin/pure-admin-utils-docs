<script setup lang="ts">
import { computed } from "vue";
import { arrayAllExist } from "@pureadmin/utils";

let arr1 = [1, 2, "3", 4, 10];
let arr2 = [1, "3", 2];
let arr3 = [1, "3", 2, 8];

function stringify(val) {
  return JSON.stringify(val);
}

let firstText = computed(() => {
  return `${stringify(arr1)} ${
    arrayAllExist(arr1, arr2)
      ? "包含 " + stringify(arr2) + " 中所有的值"
      : "不包含 " + stringify(arr2) + " 中的所有值"
  }`;
});

let secondText = computed(() => {
  return `${stringify(arr1)} ${
    arrayAllExist(arr1, arr3)
      ? "包含 " + stringify(arr3) + " 中所有的值"
      : "不包含 " + stringify(arr3) + " 中的所有值"
  }`;
});
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-gradient-text type="info">
        {{ firstText }}
      </n-gradient-text>
      <n-gradient-text type="info">
        {{ secondText }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
