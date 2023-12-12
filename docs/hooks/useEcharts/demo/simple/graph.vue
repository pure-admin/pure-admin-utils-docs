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
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  series: [
    {
      type: "graph",
      layout: "none",
      symbolSize: 50,
      roam: true,
      label: {
        show: true
      },
      edgeSymbol: ["circle", "arrow"],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20
      },
      data: [
        {
          name: "节点 1",
          x: 300,
          y: 300
        },
        {
          name: "节点 2",
          x: 800,
          y: 300
        },
        {
          name: "节点 3",
          x: 550,
          y: 100
        },
        {
          name: "节点 4",
          x: 550,
          y: 500
        }
      ],
      // links: [],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true
          },
          lineStyle: {
            width: 5,
            curveness: 0.2
          }
        },
        {
          source: "节点 2",
          target: "节点 1",
          label: {
            show: true
          },
          lineStyle: {
            curveness: 0.2
          }
        },
        {
          source: "节点 1",
          target: "节点 3"
        },
        {
          source: "节点 2",
          target: "节点 3"
        },
        {
          source: "节点 2",
          target: "节点 4"
        },
        {
          source: "节点 1",
          target: "节点 4"
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
