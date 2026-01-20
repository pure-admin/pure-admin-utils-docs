<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { useWatermark } from "@pureadmin/utils";

const value = ref("自定义水印值");
const { setWatermark, clear } = useWatermark();

onBeforeUnmount(() => {
  // 在离开该页面时清除整页水印
  clear();
});
</script>

<template>
  <naive-theme>
    <n-input
      class="my-2"
      style="width: 200px"
      v-model:value="value"
      placeholder="请输入要创建的水印值"
      clearable
    />
    <n-space vertical>
      <n-button
        size="small"
        @click="setWatermark(value, { verticalOffset: 160 })"
      >
        创建整页水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark(value, {
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ],
            verticalOffset: 160
          })
        "
      >
        创建整页渐变的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark(value, {
            rotate: 0,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ],
            verticalOffset: 160
          })
        "
      >
        创建整页渐变且横向水平的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark(value, {
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ],
            shadowConfig: [20],
            verticalOffset: 160
          })
        "
      >
        创建整页渐变且有阴影的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark(value, {
            globalAlpha: 0.15, // 值越低越透明
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ],
            verticalOffset: 160
          })
        "
      >
        创建整页高透明渐变的水印
      </n-button>
      <n-button size="small" @click="clear">清除整页水印</n-button>
    </n-space>
  </naive-theme>
</template>
