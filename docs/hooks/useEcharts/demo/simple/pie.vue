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
    trigger: "item"
  },
  legend: {
    top: "5%",
    left: "center"
  },
  series: [
    {
      name: "统计",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2
      },
      label: {
        show: false,
        position: "center"
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 100, name: "周一" },
        { value: 200, name: "周二" },
        { value: 300, name: "周三" },
        { value: 400, name: "周四" },
        { value: 500, name: "周五" }
      ]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
