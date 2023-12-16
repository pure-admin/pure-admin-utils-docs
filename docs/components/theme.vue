<script setup lang="ts">
import { darkTheme } from "naive-ui";
import { useDark } from "@pureadmin/utils";
import { ref, watch, onMounted } from "vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

let show = ref(false);
let dark = ref(false);
const { isDark } = useDark();

onMounted(() => {
  dark.value = isDark.value;
  show.value = true;
});

watch(
  () => isDark.value,
  val => (dark.value = val)
);
</script>

<template>
  <n-config-provider
    v-show="show"
    :theme="dark ? darkTheme : undefined"
    :hljs="hljs"
  >
    <slot :dark="dark" />
  </n-config-provider>
</template>
