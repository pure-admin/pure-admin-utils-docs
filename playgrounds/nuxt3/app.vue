<script setup lang="ts">
import { type EchartOptions, useDark, useECharts } from "@pureadmin/utils";

const switchVal = ref(false);

// 兼容dark主题
const { isDark, toggleDark } = useDark();
let theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default";
});

// 初始化ECharts
const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>, { theme });

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
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950"
  >
    <el-switch
      v-model="switchVal"
      class="ml-6 my-6"
      size="large"
      inline-prompt
      active-text="切换到浅色模式"
      inactive-text="切换到深色模式"
      style="--el-switch-on-color: #5993f7; --el-switch-off-color: #5871c0"
      @change="toggleDark"
    />
    <div ref="chartRef" style="width: 100%; height: 35vh" />
  </Body>
</template>
