<script setup lang="ts">
import { type Ref, ref, computed } from "vue";
import { type EchartOptions, useDark, useECharts } from "@pureadmin/utils";

// 兼容dark主题
const { isDark } = useDark();
let theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default";
});

// 初始化ECharts
const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>, { theme });

// 根据配置项渲染ECharts
setOptions({
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    top: 20,
    feature: {
      dataView: { readOnly: false },
      // restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    top: 20,
    data: ["Show", "Click", "Visit", "Inquiry", "Order"]
  },
  series: [
    {
      name: "Funnel",
      type: "funnel",
      left: "10%",
      top: 60,
      bottom: 60,
      width: "80%",
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        show: true,
        position: "inside"
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: "Visit" },
        { value: 40, name: "Inquiry" },
        { value: 20, name: "Order" },
        { value: 80, name: "Click" },
        { value: 100, name: "Show" }
      ]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 50vh" />
</template>
