<script setup lang="ts">
import { useDark } from "@pureadmin/utils"
import { darkTheme, NConfigProvider } from "naive-ui"

import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
hljs.registerLanguage('javascript', javascript)

const { isDark } = useDark()
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined" :hljs="hljs">
    <slot :dark="isDark" />
  </n-config-provider>
</template>
