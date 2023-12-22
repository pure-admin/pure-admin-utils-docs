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
    type: "category",
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "line",
      symbol: "triangle",
      symbolSize: 20,
      lineStyle: {
        color: "#5470C6",
        width: 4,
        type: "dashed"
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: "#EE6666",
        color: "yellow"
      }
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
