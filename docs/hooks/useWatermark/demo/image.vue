<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useWatermark, convertImageToGray } from "@pureadmin/utils";

const colRef = ref();
const grayRef = ref();

const { setWatermark } = useWatermark(colRef);
const { setWatermark: setGrayWatermark } = useWatermark(grayRef);

onMounted(() => {
  nextTick(async () => {
    setWatermark("图片加载失败、我就显示", {
      width: 225,
      imageWidth: 40,
      imageHeight: 40,
      rotate: -30,
      image: "https://xiaoxian521.github.io/hyperlink/svg/pure.svg"
    });

    setGrayWatermark("图片加载失败、我就显示", {
      width: 225,
      imageWidth: 40,
      imageHeight: 40,
      rotate: -30,
      // shadowConfig: [20],
      globalAlpha: 0.3,
      image: await convertImageToGray(
        "https://xiaoxian521.github.io/hyperlink/svg/pure.svg"
      )
    });
  });
});
</script>

<template>
  <naive-theme>
    <div
      ref="colRef"
      class="mt-4 mb-4 w-full h-[300px] border-solid border-1 border-[var(--vp-c-divider)] rounded-md"
    />
    来个灰色版咯
    <div
      ref="grayRef"
      class="mt-4 mb-4 w-full h-[300px] border-solid border-1 border-[var(--vp-c-divider)] rounded-md"
    />
  </naive-theme>
</template>
