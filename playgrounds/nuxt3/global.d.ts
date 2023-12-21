// global.d.ts
import type { ECharts } from "echarts";

// 在 declare global 中声明后项目中所有组件实例都能访问到全局属性对象的类型
declare global {
  interface GlobalPropertiesApi {
    $echarts: ECharts;
  }
}
