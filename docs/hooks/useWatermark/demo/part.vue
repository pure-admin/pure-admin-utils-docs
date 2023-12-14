<script setup lang="ts">
import { ref } from "vue";
import { useWatermark } from "@pureadmin/utils";

const partRef = ref();
const { setWatermark, clear } = useWatermark(partRef);
</script>

<template>
  <naive-theme>
    <div
      ref="partRef"
      class="mt-4 mb-4 w-[370px] h-[300px] border-dotted border-2 border-[#646cff]"
    />

    <n-space vertical>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 135,
            height: 80
          })
        "
      >
        创建局部水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 135,
            height: 80,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建局部渐变的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 145,
            height: 75,
            rotate: 0,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建局部渐变且横向水平的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 140,
            height: 64,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ],
            shadowConfig: [20]
          })
        "
      >
        创建局部渐变且有阴影的水印
      </n-button>
      <n-button size="small" @click="clear">清除局部水印</n-button>
    </n-space>
  </naive-theme>
</template>
