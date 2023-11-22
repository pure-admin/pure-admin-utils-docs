<script setup lang="ts">
import axios from "axios"
import { type Ref, ref, computed, watch } from "vue"
import { useDark, useECharts, type EchartOptions } from "@pureadmin/utils"

const { isDark } = useDark()

let theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default"
})

const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(
  chartRef as Ref<HTMLDivElement>,
  { theme }
)

const selectValue = ref('first')
const selectOptions = [
  {
    label: "第一周",
    value: 'first',
  },
  {
    label: "第二周",
    value: 'second',
  },
  {
    label: "第三周",
    value: 'third',
  }
]

function renderEcharts({ xData, yData }) {
  setOptions(
    {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: yData,
          type: 'bar'
        }
      ],
    },
  )
}

watch(
  () => selectValue.value,
  val => {
    axios.get('https://xiaoxian521.github.io/hyperlink/json/echarts.json').then(({ data }) => {
      renderEcharts(data.multipleBar[val])
    })
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <n-select class="w-[90px]" v-model:value="selectValue" :options="selectOptions" />
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
