<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "基础用法"
  }
});
</script>

<template>
  <naive-theme>
    <p class="text-start">{{ title }}</p>
  </naive-theme>
</template>

<style scoped>
:deep(.n-divider:not(.n-divider--vertical)) {
  margin-top: 16px;
}
</style>
