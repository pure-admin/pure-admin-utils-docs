<script setup lang="ts">
import { inject } from "vue";
import { useData } from "vitepress";

const { isDark } = useData();

// https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSwitchAppearance.vue#L10
const toggleAppearance = inject("toggle-appearance", () => {
  isDark.value = !isDark.value;
});
</script>

<template>
  <naive-theme #default="{ dark }">
    <n-switch :value="dark" @update:value="toggleAppearance">
      <template #checked> 回到light主题 </template>
      <template #unchecked> 切换dark主题 </template>
    </n-switch>
  </naive-theme>
</template>
