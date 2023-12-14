<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useWatermark } from "@pureadmin/utils";

const foreverRef = ref();
const { setWatermark } = useWatermark(foreverRef);

onMounted(() => {
  nextTick(() => {
    setWatermark("无法删除的水印", {
      forever: true,
      width: 180,
      height: 83
    });
  });
});
</script>

<template>
  <naive-theme>
    <div
      ref="foreverRef"
      class="mt-4 mb-4 w-full h-[300px] border-dotted border-2 border-[#646cff]"
    />
  </naive-theme>
</template>
