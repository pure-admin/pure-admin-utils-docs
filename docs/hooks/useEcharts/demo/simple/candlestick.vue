<script setup lang="ts">
import { ref, computed } from "vue";
import { useDark, useECharts } from "@pureadmin/utils";

// 兼容dark主题
const { isDark } = useDark();
let theme = computed(() => {
  return isDark.value ? "dark" : "default";
});

// 初始化ECharts
const chartRef = ref();
const { setOptions } = useECharts(chartRef, { theme });

// 根据配置项渲染ECharts
setOptions({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  xAxis: {
    data: ["2024-10-24", "2024-10-25", "2024-10-26", "2024-10-27"]
  },
  yAxis: {},
  series: [
    {
      type: "candlestick",
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42]
      ]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
