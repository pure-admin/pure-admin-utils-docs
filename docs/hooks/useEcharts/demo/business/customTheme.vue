<script setup lang="ts">
import { type Ref, ref } from "vue";
import customTheme from "./custom-theme.json";
import { useECharts } from "@pureadmin/utils";

// 初始化ECharts
const chartRef = ref<HTMLDivElement | null>(null);
// 第一种注册自定义主题的方法，使用 registerTheme 方法，此方法更适合业务，全局注册后，只需在 theme 属性添加自定义的主题字符串即可
const { echarts, setOptions } = useECharts(chartRef as Ref<HTMLDivElement>, {
  theme: "custom"
});
// @ts-expect-error
echarts.registerTheme("custom", customTheme);

// 第二种注册自定义主题的方法，将主题 json 文件直接赋值给 theme 属性
// const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>, {
//   theme: customTheme as any
// })

// 根据配置项渲染ECharts
setOptions({
  tooltip: {},
  legend: {
    top: 10,
    left: "left",
    data: ["支出", "收入"]
  },
  radar: {
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
