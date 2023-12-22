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
    trigger: "item",
    triggerOn: "mousemove"
  },
  series: [
    {
      type: "tree",
      name: "tree",
      data: [
        {
          name: "flare",
          children: [
            {
              name: "flex",
              children: [{ name: "FlareVis", value: 4116 }]
            },
            {
              name: "scale",
              children: [
                { name: "IScaleMap", value: 2105 },
                { name: "LinearScale", value: 1316 },
                { name: "LogScale", value: 3151 },
                { name: "OrdinalScale", value: 3770 },
                { name: "QuantileScale", value: 2435 },
                { name: "QuantitativeScale", value: 4839 },
                { name: "RootScale", value: 1756 },
                { name: "Scale", value: 4268 },
                { name: "ScaleType", value: 1821 },
                { name: "TimeScale", value: 5833 }
              ]
            },
            {
              name: "display",
              children: [{ name: "DirtySprite", value: 8833 }]
            }
          ]
        }
      ],
      right: "20%",
      symbolSize: 7,
      label: {
        position: "left",
        verticalAlign: "middle",
        align: "right"
      },
      leaves: {
        label: {
          position: "right",
          verticalAlign: "middle",
          align: "left"
        }
      },
      expandAndCollapse: true,
      emphasis: {
        focus: "descendant"
      },
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 50vh" />
</template>
