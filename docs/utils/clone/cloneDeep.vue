<script setup lang="ts">
import { ref } from "vue";
import { cloneDeep } from "@pureadmin/utils";

const arr = ref([1, 2, 3, { name: "boy" }]);
let copyArr = cloneDeep(arr);

function deepCopy() {
  copyArr.value = [0, 1, 2];
}
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <n-button @click="deepCopy"> 深拷贝 </n-button>
      <p>
        拷贝数据改变:
        <n-gradient-text type="info">
          {{ copyArr }}
        </n-gradient-text>
        原数据不变:
        <n-gradient-text type="info">
          {{ arr }}
        </n-gradient-text>
      </p>
    </div>
  </naive-theme>
</template>
