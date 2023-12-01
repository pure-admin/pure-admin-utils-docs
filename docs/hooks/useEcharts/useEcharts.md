<script setup>
import echarts from './echarts.vue'
import request from './request.vue'

// 常用示例
import { 
  Eline, 
  Ebar, 
  Epie, 
  Escatter, 
  Ecandlestick, 
  Eradar, 
  Eboxplot, 
  Eheatmap, 
  Egraph, 
  Etree, 
  Esunburst,
  Esankey,
  Efunnel,
  Egauge,
  EpictorialBar,
  EthemeRiver
} from './demo/simple/index.ts'

// 高级示例
import { 
  Edemo1,
  Edemo2, 
  Edemo3, 
  Edemo4,
  Edemo5,
  Edemo6
} from './demo/advanced/index.ts'
</script>

# useEcharts

::: tip 适用于 `Vue3`、`Nuxt3`（后续将支持`React`和`Next`）
兼容 `echarts` 所有 `api` 并且额外添加尺寸自适应容器和自动销毁等功能，`echarts` 能实现的它都行
:::

<!-- <ClientOnly>
  <description description="兼容`echarts`所有`api`并且额外添加尺寸自适应容器和自动销毁等功能，`echarts`能实现的它都行" :tagNameList="['Vue3']"  />
</ClientOnly> -->

## 使用前提

下面代码全局引入了 `echarts`，也可参考 [按需引入](https://echarts.apache.org/handbook/zh/basics/import#%E5%9C%A8-typescript-%E4%B8%AD%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5)

必须将 `echarts` 绑定到全局 [property](https://cn.vuejs.org/api/application.html#app-config-globalproperties) 如下

```ts
// main.ts // [!code focus]
import { type App, createApp } from "vue";
import App from "./App.vue";

import * as echarts from "echarts"; // [!code focus]

const app = createApp(App);
// 这里$echarts写法自由，起名a、b、c都行，只要保证等号右侧引入的是echarts即可 // [!code focus]
app.config.globalProperties.$echarts = echarts; // [!code focus]

app.mount("#app");
```

## 最简代码

渲染`echarts`最简单的代码

```vue
<script setup lang="ts">
import { ref } from "vue";
import { useECharts } from "@pureadmin/utils";

// 初始化ECharts
const chartRef = ref(null);
const { setOptions } = useECharts(chartRef);

// 根据配置项渲染ECharts
setOptions({
  /** 配置项 https://echarts.apache.org/zh/option.html */
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
```

## `API`

### 属性

### 事件

### 方法

<!-- ### `setOptions` -->

<!--
## 基础用法

<ClientOnly>
  <echarts />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/echarts.vue

</details>

## 接口请求

<ClientOnly>
  <request />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/request.vue

</details>

## 参数

- `elRef`：必传`Ref`，[组件实例](https://vuejs.org/guide/essentials/template-refs.html#ref-on-component)
- `options`：接收两个可选参数。第一个`theme`：[主题](https://echarts.apache.org/handbook/zh/concepts/style#%E9%A2%9C%E8%89%B2%E4%B8%BB%E9%A2%98%EF%BC%88theme%EF%BC%89)，可选`default`（默认）、`light`、`dark`，当然也可以[自定义主题](https://echarts.apache.org/zh/theme-builder.html)。第二个`tooltipId`：给`x`、`y`轴添加`Tooltip`文字提示的元素`id`，默认`tooltipElement`

## 返回值或方法

- `echarts`：Echarts
- `setOptions`：第一个参数`options`：设置图表的`配置项`和`数据`（除了 echarts 配置项[api](https://echarts.apache.org/zh/option.html#title)之外，还额外增加了的四个`api`，如下：

```js
{
  // 可选，清空当前实例，会移除实例中所有的组件和图表，一般用于动态渲染，默认：`true`
  clear: true,
  // 可选，给`x`、`y`轴添加`Tooltip`文字提示，一般用于文字太长，`x`代表`x轴`   `y`代表`y轴`   `true`(默认)代表`x、y轴`（该属性生效的前提是将 `xAxis` 或者 `yAxis` 添加`triggerEvent: true`属性，用到哪个添加哪个）
  addTooltip: true,
  // 可选，`window.onresize` 时改变图表尺寸的延时时间，单位毫秒，默认 `300` 毫秒。当您的 `echarts` 在拖拉窗口时不会自适应（一般不会出现这种情况），可以调整 `delay` 数值到自适应为止
  delay: 300,
  // 可选，是否监听页面`resize`事件并在页面`resize`时改变图表尺寸以适应当前容器，监听及改变，`true`(默认)代表监听 `false`代表不监听
  resize: true
}
```

剩余参数：类型为`OptionsParams[]`，如下

```ts
type OptionsParams = {
  /** `echarts事件（默认）`、`zrender事件` */
  type?: ElementEventType;
  /** 事件类型名称 `必传` */
  name: ElementEventName;
  /** query属性 可选 */
  query?: string | Object;
  /** 回调函数，返回params参数 `必传` */
  callback: Fn;
};
```

- `clear`：清空当前实例，会移除实例中所有的组件和图表
- `resize`：改变图表尺寸
- `getDom`：获取`ECharts`实例容器的`dom`节点
- `getWidth`：获取`ECharts`实例容器的宽度
- `getHeight`：获取`ECharts`实例容器的高度
- `getOption`：获取当前实例中维护的`option`对象
- `getDataURL`：导出图表图片，返回一个`base64`的`URL`，可以设置为`Image`的`src`
- `appendData`：此接口用于，在大数据量（百万以上）的渲染场景，分片加载数据和增量渲染
- `getInstance`：获取`ECharts`实例
- `showLoading`：显示加载动画效果
- `hideLoading`：隐藏加载动画
- `getConnectedDataURL`：导出联动的图表图片，返回一个`base64`的`url`，可以设置为`Image`的`src`。导出图片中每个图表的相对位置跟容器的相对位置有关 -->

<!-- ## 常用示例

### 折线图 line

<ClientOnly>
  <Eline />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/line.vue

</details>

### 柱状图 bar

<ClientOnly>
  <Ebar />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/bar.vue

</details>

### 饼图 pie

<ClientOnly>
  <Epie />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/pie.vue

</details>

### 散点图 scatter

<ClientOnly>
  <Escatter />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/scatter.vue

</details>

### K 线图 candlestick

<ClientOnly>
  <Ecandlestick />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/candlestick.vue

</details>

### 雷达图 radar

<ClientOnly>
  <Eradar />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/radar.vue

</details>

### 盒须图 boxplot

<ClientOnly>
  <Eboxplot />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/boxplot.vue

</details>

### 热力图 heatmap

<ClientOnly>
  <Eheatmap />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/heatmap.vue

</details>

### 关系图 graph

<ClientOnly>
  <Egraph />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/graph.vue

</details>

### 树图 tree

<ClientOnly>
  <Etree />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/tree.vue

</details>

### 旭日图 sunburst

<ClientOnly>
  <Esunburst />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/sunburst.vue

</details>

### 桑基图 sankey

<ClientOnly>
  <Esankey />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/sankey.vue

</details>

### 漏斗图 funnel

<ClientOnly>
  <Efunnel />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/funnel.vue

</details>

### 仪表盘 gauge

<ClientOnly>
  <Egauge />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/gauge.vue

</details>

### 象形柱图 pictorialBar

<ClientOnly>
  <EpictorialBar />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/pictorialBar.vue

</details>

### 主题河流图 themeRiver

<ClientOnly>
  <EthemeRiver />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/themeRiver.vue

</details>

## 高级示例

<ClientOnly>
  <theme-change />
</ClientOnly>

### demo1

<ClientOnly>
  <Edemo1 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo1.vue

</details>

### demo2

<ClientOnly>
  <Edemo2 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo2.vue

</details>

### demo3

<ClientOnly>
  <Edemo3 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo3.vue

</details>

### demo4

<ClientOnly>
  <Edemo4 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo4.vue

</details>

### demo5

<ClientOnly>
  <Edemo5 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo5.vue

</details>

### demo6

<ClientOnly>
  <Edemo6 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo6.vue

</details>

::: warning 更多`Demo`
就这点`demo`？好啦，别闹，这就把配方给您 [配方](https://www.isqqw.com/) （注册后登录，可免费查看全部图表代码，非广告，只是个人觉得不错，推荐给大家）
::: -->
