<script setup lang="ts">
import { onMounted } from "vue";
import { useDark } from "@pureadmin/utils";

const { isDark, toggleDark } = useDark();

onMounted(() => {
  console.log(isDark.value ? "dark" : "light");
});
</script>

<template>
  <naive-theme>
    <n-button @click="toggleDark">
      {{ `当前网页处于 ${isDark ? "dark" : "light"} 主题，点击切换主题` }}
    </n-button>
  </naive-theme>
</template>
