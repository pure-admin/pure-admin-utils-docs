<script setup lang="ts">
import { ref, computed } from "vue";
import { useDraggable } from "@pureadmin/utils";

const dragRef = ref();
const targetRef = ref();
const { transform } = useDraggable(dragRef, targetRef, true);
let info = computed(() => {
  return `offsetX: ${transform.value.offsetX} offsetY: ${transform.value.offsetY}`;
});
</script>

<template>
  <naive-theme>
    <div ref="targetRef">
      <div
        ref="dragRef"
        className="w-150px flex flex-wrap justify-center relative z-100"
      >
        <n-tag type="info" style="cursor: move">试试拖动我😊</n-tag>
        <n-tag type="error"> {{ info }} </n-tag>
      </div>
    </div>
  </naive-theme>
</template>
