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
const { echarts, setOptions } = useECharts(chartRef, {
  theme
});

setOptions({
  backgroundColor: "#1b1b1f",
  tooltip: {
    backgroundColor: "rgba(0,0,0,0.7)",
    borderWidth: 0,
    textStyle: {
      fontSize: 16,
      color: "#fff"
    },
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  // grid: {
  //   top: '10%',
  //   right: '10%',
  //   left: '10%',
  //   bottom: '10%'
  // },
  xAxis: [
    {
      type: "category",
      data: ["工作票", "操作票", "抢修", "用电调查", "设备巡视"],
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.12)"
        }
      },
      axisLabel: {
        margin: 15,
        color: "#e2e9ff",
        fontSize: 14
      }
    }
  ],
  yAxis: [
    {
      axisLabel: {
        formatter: "{value}",
        color: "#e2e9ff"
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.12)"
        }
      }
    }
  ],
  series: [
    {
      type: "bar",
      data: [300, 450, 770, 203, 255],
      barWidth: "20px",
      itemStyle: {
        // @ts-expect-error
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: "rgba(0,244,255,1)" // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(0,77,167,1)" // 100% 处的颜色
            }
          ],
          false
        ),
        borderRadius: [30, 30, 30, 30],
        shadowColor: "rgba(0,160,221,1)",
        shadowBlur: 4
      },
      label: {
        show: true,
        lineHeight: 30,
        width: 80,
        height: 30,
        backgroundColor: "rgba(0,160,221,0.1)",
        borderRadius: 200,
        position: ["-8", "-60"],
        distance: 1,
        formatter: ["    {d|●}", " {a|{c}}     \n", "    {b|}"].join(","),
        rich: {
          d: {
            color: "#3CDDCF"
          },
          a: {
            color: "#fff",
            align: "center"
          },
          b: {
            width: 1,
            height: 30,
            borderWidth: 1,
            borderColor: "#234e6c",
            align: "left"
          }
        }
      }
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 50vh" />
</template>
