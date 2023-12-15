<script setup lang="ts">
import { ref } from "vue";
import { convertImageToGray } from "@pureadmin/utils";

let vueSvg = ref();
let reactPng = ref();
let vueStr = "https://xiaoxian521.github.io/hyperlink/svg/vue.svg";
let reactStr = "https://xiaoxian521.github.io/hyperlink/img/react.png";

convertImageToGray(vueStr)
  .then(grayscaleImageSrc => {
    vueSvg.value = grayscaleImageSrc;
  })
  .catch(error => {
    console.error(error);
  });

convertImageToGray(reactStr)
  .then(grayscaleImageSrc => {
    reactPng.value = grayscaleImageSrc;
  })
  .catch(error => {
    console.error(error);
  });
</script>

<template>
  <naive-theme>
    原彩色图片
    <div class="flex">
      <img :src="vueStr" alt="vueStr" />
      <img :src="reactStr" alt="reactStr" />
    </div>
    转换后的灰色图片
    <div class="flex">
      <img :src="vueSvg" alt="vueSvg" />
      <img :src="reactPng" alt="reactPng" />
    </div>
  </naive-theme>
</template>
