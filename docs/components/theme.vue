<script setup lang="ts">
import { useDark } from "@pureadmin/utils";
import { darkTheme, NConfigProvider } from "naive-ui";

const { isDark } = useDark();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined">
    <slot :dark="isDark" />
  </n-config-provider>
</template>
