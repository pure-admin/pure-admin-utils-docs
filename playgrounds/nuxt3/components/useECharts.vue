<script setup lang="ts">
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
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      barWidth: "60%",
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 600px; height: 35vh" />
</template>
