<script setup lang="ts">
import { ref, onMounted } from "vue";
import { randomGradient } from "@pureadmin/utils";

let color = ref();
onMounted(() => (color.value = randomGradient()));
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center my-4">
      <n-button
        @click="
          color = randomGradient({
            randomizeHue: true,
            randomizeSaturation: true,
            randomizeLightness: true,
            randomizeAngle: true
          })
        "
      >
        随机生成渐变色
      </n-button>
    </n-space>
    {{ color }}
    <n-space className="flex mt-4">
      <!-- 渐变背景 -->
      <div class="w-12 h-12 rounded" :style="{ backgroundImage: color }" />
      <!-- 渐变边框 -->
      <div
        class="w-12 h-12 border-2 border-solid"
        :style="{ borderImage: `${color}1` }"
      />
      <!-- 渐变文字 -->
      <h1
        class="gradient-text leading-normal"
        :style="{ backgroundImage: color }"
      >
        渐变背景、边框、文字
      </h1>
    </n-space>
  </naive-theme>
</template>

<style scoped>
/* 
  color 属性不支持渐变，它只接收单一的颜色值
  如果想要文本的颜色具有渐变效果需要先设置 color: transparent 使文本颜色透明
  然后使用 background-image 属性为文本设置渐变背景
  最后使用 background-clip: text 属性将渐变背景置于文本区域
*/
.gradient-text {
  font-weight: bold;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
