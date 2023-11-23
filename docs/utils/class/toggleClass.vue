<script setup lang="ts">
import { ref, nextTick } from "vue";
import { toggleClass, getClass, hasClass } from "@pureadmin/utils";

const testRef = ref();
const names = ref();

nextTick(() => {
  names.value = getClass(testRef.value);
});

function onAdd() {
  toggleClass(!hasClass(testRef.value, "test1"), "test1", testRef.value);
  names.value = getClass(testRef.value);
}
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <div ref="testRef" class="test"></div>
      <n-button type="primary" @click="onAdd"> 点击切换类名 </n-button>
      <p>当前元素的类名 {{ names }}</p>
    </div>
  </naive-theme>
</template>
