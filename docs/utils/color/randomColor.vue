<script setup lang="ts">
import { ref } from "vue";
import { randomColor } from "@pureadmin/utils";

let color = ref();
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="color = randomColor()"> 随机生成rgb颜色 </n-button>
      <n-button @click="color = randomColor({ type: 'hex' })">
        随机生成hex颜色
      </n-button>
      <n-button @click="color = randomColor({ type: 'hsl' })">
        随机生成hsl颜色
      </n-button>
      <n-button @click="color = randomColor({ num: 6 })">
        随机生成指定数量的rgb颜色数组
      </n-button>
    </n-space>
    <n-gradient-text type="info" class="mt-2">
      {{ color }}
    </n-gradient-text>
  </naive-theme>
</template>
