<script setup lang="ts">
import axios from "axios";
import { type Ref, ref, computed, watch } from "vue";
import { useDark, useECharts, type EchartOptions } from "@pureadmin/utils";

let echartsData = ref();
let isBottom = ref(false);
const { isDark } = useDark();

let theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default";
});

const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>, { theme });

const selectValue = ref("first");
const selectOptions = [
  {
    label: "第一周",
    value: "first"
  },
  {
    label: "第二周",
    value: "second"
  },
  {
    label: "第三周",
    value: "third"
  }
];

function renderEcharts({ xData, yData, group = [] }) {
  setOptions(
    {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      xAxis: {
        type: "category",
        data: xData
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: yData,
          type: "bar"
        }
      ]
    },
    {
      name: "click",
      callback: ({ name }) => {
        // echarts数据可能较多，实际使用中最好把下钻的数据放在不同接口，或同一接口不同参数
        const groupData = group.find(data => data.name === name);
        groupData && renderEcharts(groupData);
        if (!group[0]?.group && !isBottom.value) {
          // 到底了
          isBottom.value = true;
        }
      }
    }
  );
}

function onBack() {
  isBottom.value = false;
  renderEcharts(echartsData.value);
}

watch(
  () => selectValue.value,
  async val => {
    const { data } = await axios.get(
      "https://xiaoxian521.github.io/hyperlink/json/echarts.json"
    );
    echartsData.value = data.multipleBar[val];
    renderEcharts(data.multipleBar[val]);
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<template>
  <naive-theme>
    <div class="flex items-center mt-2">
      <n-select
        class="w-[90px]"
        size="small"
        v-model:value="selectValue"
        :options="selectOptions"
      />
      <n-button
        tertiary
        size="small"
        type="primary"
        class="ml-2"
        v-show="isBottom"
        @click="onBack"
      >
        到底了，返回
      </n-button>
    </div>
    <div ref="chartRef" style="width: 100%; height: 35vh" />
  </naive-theme>
</template>
