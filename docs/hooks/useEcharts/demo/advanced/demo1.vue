<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
import { type Ref, ref, computed } from "vue";
import {
  type EchartOptions,
  type UtilsEChartsOption,
  useDark,
  useECharts
} from "@pureadmin/utils";

// 兼容dark主题
const { isDark } = useDark();
let theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default";
});

// 初始化ECharts
const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>, { theme });

const advancedDemo1Url3 =
  "https://xiaoxian521.github.io/hyperlink/img/echarts-advanceddemo1-3.png";
const advancedDemo1Url2 =
  "https://xiaoxian521.github.io/hyperlink/img/echarts-advanceddemo1-2.png";
const advancedDemo1Url1 =
  "https://xiaoxian521.github.io/hyperlink/img/echarts-advanceddemo1-1.png";

let erArr = [
  {
    name: "权限",
    times: 2,
    type: 2
  },
  {
    name: "文档",
    times: 2,
    type: 2
  },
  {
    name: "教程",
    times: 2,
    type: 2
  },
  {
    name: "组件",
    times: 2,
    type: 2
  },
  {
    name: "工具",
    times: 2,
    type: 2
  },
  {
    name: "设计",
    times: 2,
    type: 2
  }
];

let sumTimes = 0;
sumTimes = erArr.reduce(function (prev, next) {
  return prev + next.times;
}, 0);
let color = ["#ffffff", "#36fff6", "rgba(91, 84, 255, 1)", "#67f95f"];
let oneArr = [
  {
    name: "pure-admin",
    times: sumTimes,
    symbol: "image://" + advancedDemo1Url1,
    symbolSize: 198,
    color: "#ffffff",
    itemStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#ffe93a" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#36fff6" // 100% 处的颜色
          }
        ],
        global: false // 缺省为 false
      }
    }
  }
];

let allArr = [...oneArr, ...erArr],
  dataArr = [];
// 点
allArr.forEach((el: any) => {
  let imgUrl = "image://" + advancedDemo1Url2;
  let size = 122;
  let show = true;
  if (el.symbol) {
    imgUrl = el.symbol;
    size = el.symbolSize;
    show = false;
  }
  el.symbolSize = size;
  el.symbol = imgUrl;
  el.itemStyle = {};
  el.label = {
    show: show,
    /* position: "center",*/
    fontSize: 25,
    fontFamily: "FZLanTingHei-B-GBK",
    fontWeight: 400,
    color: "#FFFFFF"
  };
});

// 圆形分区
function group(arr, r) {
  const newArray = [];
  const { length: arLen } = arr;
  arr.forEach((e, ind) => {
    // 按角度均匀分布
    const ang = 90 - ((360 / arLen) as any).toFixed(2) * (ind + 1);
    const x = (Math.cos((ang * Math.PI) / 180).toFixed(2) as any) * r;
    const y = (Math.sin((ang * Math.PI) / 180).toFixed(2) as any) * r;
    const x1 = (Math.cos((ang * Math.PI) / 180).toFixed(2) as any) * (r - 5);
    const y1 = (Math.sin((ang * Math.PI) / 180).toFixed(2) as any) * (r - 5);
    const x0 = (Math.cos((ang * Math.PI) / 180).toFixed(2) as any) * (r - 30);
    const y0 = (Math.sin((ang * Math.PI) / 180).toFixed(2) as any) * (r - 30);
    e.value = [x.toFixed(2), y.toFixed(2)];
    e.twoPoint = [
      [x1.toFixed(2), y1.toFixed(2)],
      [x0.toFixed(2), y0.toFixed(2)]
    ];
    newArray.push(e);
  });
  return newArray;
}

// 线配置
function linesConfig(arr) {
  const [dataArr] = [[], [0, 0]];
  arr.forEach(el => {
    function getFormatItem(start, end) {
      let item = [
        { coord: el.twoPoint[start] }, // 起点
        {
          coord: el.twoPoint[end],
          lineStyle: {
            color: color[el.type],
            curveness: el.type === 3 ? 0.1 : 0
          },
          effect: {
            color: color[el.type],
            symbol: "image://" + advancedDemo1Url3,
            symbolSize: [18 * 0.7, 34 * 0.7]
          }
        } // 终点
      ];
      return item;
    }
    switch (el.type) {
      case 0:
        break;
      case 1:
        dataArr.push(getFormatItem(0, 1));
        break;
      case 2:
        dataArr.push(getFormatItem(1, 0));
        break;
      case 3:
        dataArr.push(getFormatItem(0, 1));
        dataArr.push(getFormatItem(1, 0));
        break;
    }
  });
  return dataArr;
}

// 点分布
oneArr = group(oneArr, 0);
erArr = group(erArr, 40);

allArr = [...oneArr, ...erArr];
// 线坐标和配置
dataArr = linesConfig(allArr);

function generateData(totalNum, bigvalue, smallvalue, color, width) {
  let dataArr = [];
  for (let i = 0; i < totalNum; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        name: (i + 1).toString(),
        value: bigvalue,
        itemStyle: {
          color: color,
          borderWidth: width,
          borderRadius: 20
        }
      });
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: smallvalue,
        itemStyle: {
          color: "rgba(0,0,0,0)",
          borderWidth: 0,
          borderRadius: 20
        }
      });
    }
  }
  return dataArr;
}

let threeData = generateData(6, 30, 10, "rgba(28, 211, 230, 1)", 5);
let fourData = generateData(12, 80, 10, "rgba(91, 84, 255, 1)", 1);
let radius1 = ["41%", "38%"];
let radius2 = ["40%", "39%"];
let height = document.body.clientHeight;
if (height < 1000) {
  radius1 = ["43%", "40%"];
  radius2 = ["42%", "41%"];
}

let startAngle = 50; // 初始旋转角度
let startAngle2 = 50; // 初始旋转角度
let [minradius, radius, maxradius] = [24, 24, 28]; // 初始缩放尺寸
let isBig = true; // 缩放动画 标识

function getOptions() {
  return {
    clear: false,
    backgroundColor: "#1b1b1f",
    tooltip: {
      backgroundColor: "rgba(0,0,0,0.7)",
      borderWidth: 0,
      textStyle: {
        fontSize: 16,
        color: "#fff"
      },
      // formatter: function (param) {
      //   let str =  param.name + " : " + param.data.times + "次"
      //   return str
      // },
      formatter: param => param.name
    },
    title: {
      text: "pure-admin",
      left: "center",
      top: "center",
      textStyle: {
        color: "#fff",
        fontSize: 18
      }
    },
    xAxis: {
      show: false,
      type: "value",
      max: 50,
      min: -51
    },
    grid: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    },
    yAxis: {
      show: false,
      type: "value",
      max: 50,
      min: -50
    },
    series: [
      {
        name: "节点",
        type: "graph",
        silent: false,
        cursor: "default",
        coordinateSystem: "cartesian2d",
        z: 3,
        itemStyle: {
          shadowColor: "none"
        },
        emphasis: {
          scale: false // 鼠标悬浮高亮
        },
        data: allArr
      },
      {
        name: "线图",
        type: "lines",
        silent: true,
        cursor: "default",
        coordinateSystem: "cartesian2d",
        polyline: false, // 多线段
        z: 1,
        lineStyle: {
          width: 2,
          type: "dashed",
          curveness: 0
        },
        effect: {
          show: true,
          period: 8, //箭头指向速度，值越小速度越快
          trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "arrow", //箭头图标
          symbolSize: 6
        },
        emphasis: {
          scale: false, // 鼠标悬浮高亮
          lineStyle: {
            type: "dashed"
          }
        },
        data: dataArr,
        tooltip: {
          show: false
        }
      },
      {
        type: "pie",
        name: "旋转圆",
        zlevel: 20,
        silent: true,
        radius: radius1,
        emphasis: {
          scale: false // 鼠标悬浮高亮
        },
        startAngle: startAngle,
        data: threeData,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        tooltip: {
          show: false
        }
      },
      {
        type: "pie",
        name: "旋转圆",
        zlevel: 19,
        silent: true,
        radius: radius2,
        emphasis: {
          scale: false // 鼠标悬浮高亮
        },
        startAngle: startAngle2,
        data: fourData,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        tooltip: {
          show: false
        }
      }
    ]
  } as UtilsEChartsOption;
}

function draw() {
  startAngle = startAngle - 5;
  startAngle2 = startAngle2 + 5;
  if (isBig) {
    radius = radius + 0.5;
    if (radius > maxradius) {
      isBig = false;
    }
  } else {
    radius = radius - 0.5;
    if (radius < minradius) {
      isBig = true;
    }
  }
  setOptions(getOptions());
}

draw();
useIntervalFn(draw, 200);
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 65vh" />
</template>
