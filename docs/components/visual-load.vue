<script setup lang="ts">
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const isVisible = ref(false);

function onIntersectionObserver([
  { isIntersecting }
]: IntersectionObserverEntry[]) {
  if (isVisible.value) return;
  isVisible.value = isIntersecting;
}
</script>

<template>
  <div
    v-intersection-observer="[onIntersectionObserver, { rootMargin: '140px' }]"
  >
    <div v-if="isVisible">
      <slot />
    </div>
  </div>
</template>
