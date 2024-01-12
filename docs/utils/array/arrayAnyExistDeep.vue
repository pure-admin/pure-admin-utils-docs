<script setup lang="ts">
import { computed } from "vue";
import { arrayAnyExistDeep } from "@pureadmin/utils";

let arr1 = [
  123,
  [[[1, 2, 3]]],
  { nested: { a: 1, b: [1, 2, 3] } },
  [1, ["a", "b", "c"]],
  { key: "value" }
];
let arr2 = [
  [[[1, 2, 3]]],
  { nested: { a: 1, b: [1, 2, 3] } },
  [1, ["a", "b", "c"]]
];
let arr3 = [12, 456, [{ a: 1 }], [[22, 44]]];

function stringify(val) {
  return JSON.stringify(val);
}

let firstText = computed(() => {
  return `${stringify(arr1)} ${
    arrayAnyExistDeep(arr1, arr2)
      ? "包含 " + stringify(arr2) + " 其中任意一个值"
      : "不包含 " + stringify(arr2) + " 其中任意一个值"
  }`;
});

let secondText = computed(() => {
  return `${stringify(arr1)} ${
    arrayAnyExistDeep(arr1, arr3)
      ? "包含 " + stringify(arr3) + " 其中任意一个值"
      : "不包含 " + stringify(arr3) + " 其中任意一个值"
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
