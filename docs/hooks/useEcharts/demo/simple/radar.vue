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
  tooltip: {},
  legend: {
    top: 10,
    left: "left",
    data: ["支出", "收入"]
  },
  radar: {
    // shape: 'circle',
    radius: "60%",
    indicator: [
      { name: "周一" },
      { name: "周二" },
      { name: "周三" },
      { name: "周四" },
      { name: "周五" }
    ]
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [30, 60, 90, 120, 150],
          name: "支出"
        },
        {
          value: [60, 90, 120, 150, 180],
          name: "收入"
        }
      ]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
