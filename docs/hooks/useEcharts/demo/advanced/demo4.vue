<script setup lang="ts">
import { ref, computed } from "vue";
import { useDark, useECharts } from "@pureadmin/utils";
// 必须引入，此处注释是因为echarts-gl对纯esm以及服务端支持不友好
// 在此处引入了 https://github.com/pure-admin/pure-admin-utils-docs/blob/master/docs/.vitepress/theme/index.ts#L22
// 对于vue3非服务端可以把import "echarts-gl"注释解开
// import "echarts-gl";

// 兼容dark主题
const { isDark } = useDark();
let theme = computed(() => {
  return isDark.value ? "dark" : "default";
});

// 初始化ECharts
const chartRef = ref();
const { setOptions } = useECharts(chartRef, { theme });

let l1 = 2;
let l2 = 5;
let l3 = 8;
let data1 = [
  [0, l1, 2],
  [1, l1, 1],
  [2, l1, 3],
  [3, l1, 4],
  [4, l1, 2],
  [5, l1, 4],
  [6, l1, 1],
  [7, l1, 3],
  [8, l1, 4],
  [9, l1, 1],
  [10, l1, 2]
];
let data2 = [
  [0, l2, 2],
  [1, l2, 3],
  [2, l2, 5],
  [3, l2, 3],
  [4, l2, 5],
  [5, l2, 3],
  [6, l2, 3],
  [7, l2, 5],
  [8, l2, 6],
  [9, l2, 2],
  [10, l2, 1]
];
let data3 = [
  [0, l3, 4],
  [1, l3, 6],
  [2, l3, 5],
  [3, l3, 7],
  [4, l3, 4],
  [5, l3, 8],
  [6, l3, 6],
  [7, l3, 8],
  [8, l3, 6],
  [9, l3, 5],
  [10, l3, 1]
];

setOptions({
  grid3D: {
    show: true,
    boxWidth: 200,
    boxHeight: 160,
    boxDepth: 100,
    axisLine: {
      lineStyle: {
        color: "#ffffff",
        opacity: 1
      }
    },
    axisPointer: {
      show: false
    },
    splitLine: {
      show: false
    },
    environment: "#1b1b1f",
    viewControl: {
      distance: 300,
      alpha: 10,
      beta: 20,
      animation: true
    }
  },
  // 三维坐标轴
  xAxis3D: {
    max: 10
  },
  yAxis3D: {
    max: 10
  },
  zAxis3D: {
    max: 10
  },
  series: [
    {
      //参照平面
      type: "bar3D",
      name: "ground",
      itemStyle: {
        opacity: 0.1
      },
      silent: true,
      barSize: [200, 100],
      data: [[5, 5, 0.1]]
    },
    {
      type: "line3D",
      name: "1",
      lineStyle: {
        width: 4
      },
      data: data1
    },
    {
      type: "line3D",
      name: "2",
      data: data2,
      lineStyle: {
        width: 4
      }
    },
    {
      type: "line3D",
      name: "3",
      lineStyle: {
        width: 4
      },
      data: data3
    }
  ]
} as any);
// echarts-gl2.0.9版本没有导出任何typescript类型文件 所以直接any就行
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 40vh" />
</template>
