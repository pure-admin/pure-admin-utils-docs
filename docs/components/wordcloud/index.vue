<script setup lang="ts">
import { useData } from "./data";
import { ref, computed } from "vue";
import { useRouter } from "vitepress";
import { Reload } from "@vicons/ionicons5";
import { useEventListener } from "@vueuse/core";
import "../../.vitepress/plugins/wordcloud/index.d.ts"; // 路径要写完整，确保打包时引用正确
import { hooks } from "../../.vitepress/utils/sortHooks";
import { randomColor, useECharts, debounce } from "@pureadmin/utils";
import { useData as useDark } from "vitepress";

const loading = ref(true);
const { data } = useData();
const { go } = useRouter();
const { isDark } = useDark();

let theme = computed(() => {
  return isDark.value ? "dark" : "default";
});

const chartRef = ref();
const { setOptions, resize } = useECharts(chartRef, {
  theme
});

setOptions(
  {
    resize: false,
    tooltip: {},
    series: [
      {
        type: "wordCloud",
        gridSize: 0,
        sizeRange: [120, 160],
        rotationRange: [100, 0],
        shape: "star",
        top: 66,
        textStyle: {
          fontWeight: "bold",
          color: () => `rgb(${randomColor()})`
        },
        drawOutOfBound: false,
        shrinkToFit: true,
        data
      }
    ]
  },
  {
    // 渲染完成
    name: "rendered",
    callback: () => (loading.value = false)
  },
  {
    // 点击事件
    name: "click",
    callback: ({ name }) => {
      if (name === "Utils") {
        go("/utils/amount/amount");
      } else if (name === "Hooks") {
        go(`/hooks/${hooks[0]}/${hooks[0]}`);
      } else if (name.slice(0, 3) === "use") {
        go(`/hooks/${name}/${name}`);
      } else {
        go(`/utils/${name}/${name}`);
      }
    }
  }
);

useEventListener(
  window,
  "resize",
  debounce(() => {
    loading.value = true;
    resize();
  })
);
</script>

<template>
  <n-spin :show="loading" description="loading">
    <template #icon>
      <n-icon>
        <Reload />
      </n-icon>
    </template>
    <div ref="chartRef" style="width: 100%; height: 35vh" />
  </n-spin>
</template>
