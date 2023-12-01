import * as echarts from "echarts";

// 引入 echarts 注册到 globalProperties 即可使用 useECharts
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.globalProperties.$echarts = echarts;
});
