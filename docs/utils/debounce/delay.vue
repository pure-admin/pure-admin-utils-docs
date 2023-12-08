<script setup lang="ts">
import { ref } from "vue";
import { delay } from "@pureadmin/utils";
import { useIntervalFn } from "@vueuse/core";

let second = ref(4);

const { pause, isActive } = useIntervalFn(() => {
  second.value--;
}, 1000);

delay(4000).then(() => {
  second.value = 4;
  pause();
});
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-gradient-text type="info">
        {{ isActive ? `${second} 秒后函数执行` : `函数执行花费 ${second} 秒` }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
