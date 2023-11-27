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
    data: ["周一", "周二", "周三", "周四", "周五"]
  },
  series: [
    {
      name: "剩余",
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
        { value: 20, name: "周五" },
        { value: 40, name: "周四" },
        { value: 60, name: "周三" },
        { value: 80, name: "周二" },
        { value: 100, name: "周一" }
      ]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 50vh" />
</template>
