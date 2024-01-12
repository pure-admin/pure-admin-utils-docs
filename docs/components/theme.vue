<script setup lang="ts">
import { useData } from "vitepress";
import { darkTheme } from "naive-ui";
import { ref, watch, onMounted } from "vue";
import { useDark, delay } from "@pureadmin/utils";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

let show = ref(false);
let dark = ref(false);
const { page } = useData();
const { isDark } = useDark();

onMounted(() => {
  let time = page.value.title === "useECharts" ? 500 : 60;
  dark.value = isDark.value;
  show.value = true;
  delay(time).then(() => {
    if (window.location.hash) {
      const decodedHash = decodeURIComponent(window.location.hash);
      const targetElement = document.querySelector(decodedHash);
      if (targetElement) {
        // @ts-expect-error
        window.scrollTo(0, targetElement.offsetTop + 20);
      }
    }
  });
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
