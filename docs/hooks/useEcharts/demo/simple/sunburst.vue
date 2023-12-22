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
  visualMap: {
    type: "continuous",
    min: 10,
    max: 20,
    inRange: {
      color: ["#2F93C8", "#AEC48F", "#FFDB5C", "#F98862"]
    }
  },
  series: {
    type: "sunburst",
    data: [
      {
        name: "正教授",
        children: [
          {
            name: "一级正教授",
            value: 20
          },
          {
            name: "二级正教授",
            value: 16
          },
          {
            name: "三级正教授",
            value: 12
          }
        ]
      },
      {
        name: "副教授",
        children: [
          {
            name: "一级副教授",
            value: 18
          },
          {
            name: "二级副教授",
            value: 14
          },
          {
            name: "三级副教授",
            value: 10
          }
        ]
      }
    ],
    radius: [60, "90%"],
    itemStyle: {
      borderRadius: 7,
      borderWidth: 2
    },
    label: {
      show: true
    }
  }
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 50vh" />
</template>
