import * as echarts from "echarts";

export function useEcharts(app: any) {
  app.config.globalProperties.$echarts = echarts;
}

export default echarts;
