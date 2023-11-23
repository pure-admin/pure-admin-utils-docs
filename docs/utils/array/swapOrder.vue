<script setup lang="ts">
import { ref } from "vue";
import { swapOrder } from "@pureadmin/utils";

let arr = ref([1, 2]);
let arr1 = ref([
  { name: "Tom", age: 18 },
  { name: "Jack", age: 17 }
]);
let arr2 = ref([6, 5, 4, 3, 2, 1]);

function onclick() {
  swapOrder(arr.value, 0, 1);
  swapOrder(arr1.value, 0, 1);
  swapOrder(arr2.value, 0, 5);
}
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-button @click="onclick"> 点击互换两个元素位置 </n-button>
      <n-gradient-text type="info">
        {{ arr }}
      </n-gradient-text>
      <n-gradient-text type="info">
        {{ arr1 }}
      </n-gradient-text>
      <n-gradient-text type="info">
        {{ arr2 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
