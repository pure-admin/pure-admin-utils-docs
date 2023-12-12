import type { Ref, ComputedRef } from "vue";
import type { ECharts, EChartsOption, EChartsCoreOption } from "echarts";

interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

type ToolTipType = "x" | "y" | true;
type Theme = "default" | "light" | "dark" | string;
declare type ElementEventType = "echarts" | "zrender";
declare type ElementEventName =
  | "click"
  | "dblclick"
  | "mousewheel"
  | "mouseout"
  | "mouseover"
  | "mouseup"
  | "mousedown"
  | "mousemove"
  | "contextmenu"
  | "drag"
  | "dragstart"
  | "dragend"
  | "dragenter"
  | "dragleave"
  | "dragover"
  | "drop"
  | "globalout"
  | "selectchanged"
  | "highlight"
  | "downplay"
  | "legendselectchanged"
  | "legendselected"
  | "legendunselected"
  | "legendselectall"
  | "legendinverseselect"
  | "legendscroll"
  | "datazoom"
  | "datarangeselected"
  | "graphroam"
  | "georoam"
  | "treeroam"
  | "timelinechanged"
  | "timelineplaychanged"
  | "restore"
  | "dataviewchanged"
  | "magictypechanged"
  | "geoselectchanged"
  | "geoselected"
  | "geounselected"
  | "axisareaselected"
  | "brush"
  | "brushEnd"
  | "brushselected"
  | "globalcursortaken"
  | "rendered"
  | "finished";
interface EchartOptions {
  /** 主题色（可选`default`、`light`、`dark`，也可以 [自定义主题](https://echarts.apache.org/zh/theme-builder.html) ，默认`default`） */
  theme?: Theme | Ref<Theme> | ComputedRef<Theme>;
  /** 给`x`、`y`轴添加`Tooltip`文字提示的元素id，默认`tooltipElement` */
  tooltipId?: string;
  /** 设备像素比，默认取浏览器的值`window.devicePixelRatio` */
  devicePixelRatio?: number;
  /** 渲染模式，支持`canvas`或者`svg`，默认`canvas` */
  renderer?: "canvas" | "svg";
  /** 是否使用服务端渲染，只有在`SVG`渲染模式有效。开启后不再会每帧自动渲染，必须要调用 [renderToSVGString](https://echarts.apache.org/zh/api.html#echartsInstance.renderToSVGString) 方法才能得到渲染后`SVG`字符串 */
  ssr?: boolean;
  /** 是否开启脏矩形渲染，只有在`Canvas`渲染模式有效，默认为`false` */
  useDirtyRect?: boolean;
  /** 是否扩大可点击元素的响应范围。`null`表示对移动设备开启；`true`表示总是开启；`false`表示总是不开启 */
  useCoarsePointer?: boolean;
  /** 扩大元素响应范围的像素大小，配合`opts.useCoarsePointer`使用 */
  pointerSize?: number;
  /** 可显式指定实例宽度，单位为像素。如果传入值为`null/undefined/'auto'`，则表示自动取`dom`（实例容器）的宽度 */
  width?: number | string;
  /** 可显式指定实例高度，单位为像素。如果传入值为`null/undefined/'auto'`，则表示自动取`dom`（实例容器）的高度 */
  height?: number | string;
  /** 使用的语言，内置`ZH`和`EN`两个语言，也可以使用 [echarts.registerLocale](https://echarts.apache.org/zh/api.html#echarts.registerLocale) 方法注册新的语言包。目前支持的语言见 [src/i18n](https://github.com/apache/echarts/tree/release/src/i18n) */
  locale?: string;
}
interface OptionsParams {
  /** 事件类型名称 `必传` */
  name: ElementEventName;
  /** 回调函数，返回 [params](https://echarts.apache.org/zh/api.html#events.%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6) 参数 `必传` */
  callback: Fn;
  /** `echarts`事件（默认）或 [zrender](https://echarts.apache.org/handbook/zh/concepts/event/#%E7%9B%91%E5%90%AC%E2%80%9C%E7%A9%BA%E7%99%BD%E5%A4%84%E2%80%9D%E7%9A%84%E4%BA%8B%E4%BB%B6) 事件 */
  type?: ElementEventType;
  /** `query`属性，点击 [此处](https://echarts.apache.org/handbook/zh/concepts/event/#%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%A4%84%E7%90%86) 搜索`query`进行了解 可选 */
  query?: string | object;
}
interface LoadOpts {
  type?: string;
  opts?: {
    text?: string;
    color?: string;
    textColor?: string;
    maskColor?: string;
    zlevel?: number;
    /** 字体大小。从 `v4.8.0` 开始支持 */
    fontSize?: number;
    /** 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持 */
    showSpinner?: boolean;
    /** 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持 */
    spinnerRadius?: number;
    /** 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持 */
    lineWidth?: number;
    /** 字体粗细。从 `v5.0.1` 开始支持 */
    fontWeight?: string;
    /** 字体风格。从 `v5.0.1` 开始支持 */
    fontStyle?: string;
    /** 字体系列。从 `v5.0.1` 开始支持 */
    fontFamily?: string;
  };
}
interface AppendDataOpts {
  /** 要增加数据的系列序号 */
  seriesIndex?: string | number;
  /** 增加的数据 */
  data?: Array<any>;
}
interface DataURL {
  /** 导出的格式，可选 png, jpg, svg（注意：png, jpg 只有在 canvas 渲染器的时候可使用，svg 只有在使用 svg 渲染器的时候可用） */
  type?: string;
  /** 导出的图片分辨率比例，默认为 1 */
  pixelRatio?: number;
  /** 导出的图片背景色，默认使用 option 里的 backgroundColor */
  backgroundColor?: string;
  /** 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox'] */
  excludeComponents?: Array<string>;
}
interface EventParams {
  componentIndex?: number;
  /** 当前点击的图形元素所属的组件名称，其值如 'series'、'markLine'、'markPoint'、'timeLine' 等 */
  componentType: string;
  /** 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义 */
  seriesType: string;
  /** 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义 */
  seriesIndex: number;
  /** 系列名称。当 componentType 为 'series' 时有意义 */
  seriesName: string;
  /** 数据名，类目名 */
  name: string;
  /** 数据在传入的 data 数组中的 index */
  dataIndex: number;
  /** 传入的原始数据项 */
  data: object;
  /** sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上，其他大部分图表中只有一种 data，dataType 无意义 */
  dataType: string;
  event?: any;
  type?: string;
  targetType?: string;
  /** 传入的数据值 */
  value: string | number | Array<string | number>;
  /** 数据图形的颜色。当 componentType 为 'series' 时有意义 */
  color: string;
}
interface UtilsEChartsOption extends EChartsOption {
  /** 是否清空当前实例，会移除实例中的图表，一般用于动态渲染，默认：`true` */
  clear?: boolean;
  /** 给`x`、`y`轴添加`Tooltip`文字提示，一般用于文字太长，`x`代表`x轴`   `y`代表`y轴`   `true`代表`x、y轴`（该属性生效的前提是将 `xAxis` 或者 `yAxis` 添加`triggerEvent: true`属性，用到哪个添加哪个） */
  addTooltip?: ToolTipType;
  /** `window.onresize` 时改变图表尺寸的延时时间，单位毫秒，默认 `300` 毫秒。当 `echarts` 在拖拉窗口时不会自适应（一般不会出现这种情况），可以调整 `delay` 数值到自适应为止 */
  delay?: number;
  /** 是否监听页面`resize`事件并在页面`resize`时改变图表尺寸以适应当前容器，监听及改变，`true`(默认)代表监听 `false`代表不监听 */
  resize?: boolean;
}
interface EchartGlobalProperties {
  /** `globalProperties`属性名 */
  name?: string;
  /** `globalProperties`属性值 */
  value?: ECharts;
}
