<script setup lang="ts">
import { ref } from "vue";
import { useResizeObserver } from "@pureadmin/utils";

let isOpen = ref(true);
const textareaRef = ref();
let textareaWidth = ref();
let textareaHeight = ref();

const { stop, restart } = useResizeObserver(
  textareaRef,
  entries => {
    const [entry] = entries;
    const [{ inlineSize, blockSize }] = entry.borderBoxSize;
    textareaWidth.value = inlineSize;
    textareaHeight.value = blockSize;
  },
  { time: 0 }
);

function onClick() {
  isOpen.value = !isOpen.value;
  isOpen.value ? restart() : stop();
}
</script>

<template>
  <naive-theme>
    <n-space class="mb-2">
      <n-button @click="onClick">{{
        isOpen ? "停止监听" : "启用监听"
      }}</n-button>
    </n-space>
    <textarea
      ref="textareaRef"
      class="textarea dark:!border-[#0000] dark:bg-[rgba(255,255,255,0.1)]"
      v-text="`容器 width: ${textareaWidth}\n容器 height: ${textareaHeight}`"
    />
  </naive-theme>
</template>

<style scoped>
.textarea {
  resize: both;
  padding: 8px;
  min-height: 200px;
  max-height: 400px;
  min-width: 200px;
  max-width: 600px;
  border-radius: 4px;
  border: 2px solid rgb(224, 224, 230);
}
</style>
