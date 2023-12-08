<script setup lang="ts">
import { useData } from "vitepress";
import { darkTheme } from "naive-ui";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const { isDark } = useData();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined" :hljs="hljs">
    <ClientOnly>
      <slot :dark="isDark" />
    </ClientOnly>
  </n-config-provider>
</template>
