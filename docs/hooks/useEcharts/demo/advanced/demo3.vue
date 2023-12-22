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

const data = [
  {
    name: "数据中心",
    x: 500,
    y: 500,
    value: [220, 200],
    // https://echarts.apache.org/handbook/zh/how-to/chart-types/scatter/basic-scatter/#%E5%9B%BE%E5%BD%A2%E7%9A%84%E5%BD%A2%E7%8A%B6
    symbol:
      "image://https://xiaoxian521.github.io/hyperlink/img/echarts-advanceddemo3-1.png",
    symbolSize: [460, 320]
  },
  {
    name: "分数据中心一",
    x: 400,
    y: 400,
    value: [400, 400],
    symbol:
      "image://https://xiaoxian521.github.io/hyperlink/img/echarts-advanceddemo3-2.png",
    symbolSize: [135, 131]
  },
  {
    name: "分数据中心二",
    x: 400,
    y: 400,
    value: [10, 380],
    symbol:
      "image://https://xiaoxian521.github.io/hyperlink/img/echarts-advanceddemo3-3.png",
    symbolSize: [135, 131]
  },
  {
    name: "分数据中心三",
    x: 400,
    y: 400,
    value: [10, 10],
    symbol:
      "image://https://xiaoxian521.github.io/hyperlink/img/echarts-advanceddemo3-2.png",
    symbolSize: [135, 131]
  }
];

setOptions({
  backgroundColor: "#1b1b1f",
  xAxis: {
    show: false,
    type: "value"
  },
  yAxis: {
    show: false,
    type: "value"
  },
  tooltip: {
    show: false
  },
  series: [
    {
      type: "graph",
      zlevel: 2,
      draggable: false,
      coordinateSystem: "cartesian2d", //使用二维的直角坐标系（也称笛卡尔坐标系）
      label: {
        show: false
      },
      data: data,
      links: [
        {
          source: "数据中心",
          target: "分数据中心一"
        },
        {
          source: "数据中心",
          target: "分数据中心二"
        },
        {
          source: "数据中心",
          target: "分数据中心三"
        }
      ],
      lineStyle: {
        opacity: 1,
        color: "#53B5EA",
        curveness: 0.2,
        width: 2
      }
    },
    {
      type: "lines",
      coordinateSystem: "cartesian2d",
      z: 1,
      zlevel: 2,
      animation: false,
      effect: {
        show: true,
        period: 8,
        trailLength: 0.01,
        symbolSize: 12,
        symbol: "pin",
        loop: true,
        color: "rgba(55,155,255,0.5)"
      },
      lineStyle: {
        color: "#22AC38",
        width: 0,
        curveness: 0.2
      },
      data: [
        {
          coords: [
            [220, 200],
            [400, 400]
          ]
        },
        {
          coords: [
            [220, 200],
            [10, 380]
          ]
        },
        {
          coords: [
            [220, 200],
            [10, 10]
          ]
        }
      ]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 50vh" />
</template>
