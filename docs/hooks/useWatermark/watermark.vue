<script setup lang="ts">
import { ref } from "vue";
import { NButton, NSpace } from "naive-ui";
import { useWatermark } from "@pureadmin/utils";

let color = ref("#409EFF");
let value = ref("pure-admin-utils");
const { setWatermark, clear } = useWatermark();
</script>

<template>
  <naive-theme>
    <n-space>
      <n-button @click="setWatermark(value, { fillStyle: color })">
        创建水印
      </n-button>
      <n-button @click="clear"> 清除水印 </n-button>
    </n-space>
  </naive-theme>
</template>
