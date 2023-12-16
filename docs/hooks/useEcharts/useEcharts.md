<script setup>
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

// 偏业务示例
import { 
  Eloading,
  Edynamic,
  Erequest,
  EcustomTheme
} from './demo/business/index.ts'
</script>

# useEcharts

::: tip 适用于 `Vue3`、`Nuxt3`
兼容 `echarts` 所有 `api` 并且额外添加尺寸自适应容器和自动销毁等功能，`echarts` 能实现的它都行
:::

### 使用前提

如下所示，必须先将 `echarts` 绑定到 [globalProperties](https://cn.vuejs.org/api/application.html#app-config-globalproperties)  
下面代码全局引入了 `echarts` 也可参考 [按需引入](https://echarts.apache.org/handbook/zh/basics/import#%E5%9C%A8-typescript-%E4%B8%AD%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5)

::: code-group

```ts [Vue3]
// main.ts // [!code focus]
import { type App, createApp } from "vue";
import App from "./App.vue";

import * as echarts from "echarts"; // [!code focus]

const app = createApp(App);
// 这里$echarts写法自由，起名a、b、c都行，只要保证等号右侧引入的是echarts即可 // [!code focus]
app.config.globalProperties.$echarts = echarts; // [!code focus]

app.mount("#app");
```

```ts [Nuxt3]
// plugins/config.ts
import * as echarts from "echarts";

export default defineNuxtPlugin(nuxtApp => {
  // 这里$echarts写法自由，起名a、b、c都行，只要保证等号右侧引入的是echarts即可
  nuxtApp.vueApp.config.globalProperties.$echarts = echarts;
});
```

:::

### 最简代码

渲染`echarts`

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

### API

#### 参数

拥有两个参数，它们对`echarts`的 [init](https://echarts.apache.org/zh/api.html#echarts.init) 进行了封装，与`init`唯一的区别是`useECharts`将`theme`属性放到下面的`options`参数里并且新增一个`tooltipId`属性

```ts
//  在此处配置参数
const {} = useECharts(elRef, options);
```

<div class="pure-no-border">

| **参数属性** | 必传 | **说明**                                                                                                 | **类型**              |
| ------------ | ---- | -------------------------------------------------------------------------------------------------------- | --------------------- |
| `elRef`      | 是   | [获取DOM元素或组件实例引用的ref](https://cn.vuejs.org/guide/essentials/template-refs.html#template-refs) | `Ref<HTMLDivElement>` |
| `options`    | 否   | 拥有`11`个属性，具体看下面的 `options` 详情                                                              | `EchartOptions`       |

##### `options` 详情

| **参数属性**       | **说明**                                                                                                                                                                                                                                        | **类型**                                    | **默认值**                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------- |
| `theme`            | [主题色](https://echarts.apache.org/handbook/zh/concepts/style#%E9%A2%9C%E8%89%B2%E4%B8%BB%E9%A2%98%EF%BC%88theme%EF%BC%89)，可选`default`、`light`、`dark`，也可以[自定义主题](https://echarts.apache.org/zh/theme-builder.html)               | `Theme`、`Ref<Theme>`、`ComputedRef<Theme>` | `default`                 |
| `tooltipId`        | 给`x`、`y`轴添加`Tooltip`文字提示的元素`id`                                                                                                                                                                                                     | `string`                                    | `tooltipElement`          |
| `devicePixelRatio` | 设备像素比，取自浏览器                                                                                                                                                                                                                          | `number`                                    | `window.devicePixelRatio` |
| `renderer`         | 渲染模式，支持`canvas`或者`svg`                                                                                                                                                                                                                 | `string`                                    | `canvas`                  |
| `ssr`              | 是否使用服务端渲染，只有在`SVG`渲染模式有效。开启后不再会每帧自动渲染，必须要调用 [renderToSVGString](https://echarts.apache.org/zh/api.html#echartsInstance.renderToSVGString) 方法才能得到渲染后`SVG`字符串                                   | `boolean`                                   |                           |
| `useDirtyRect`     | 是否开启脏矩形渲染，只有在`Canvas`渲染模式有效                                                                                                                                                                                                  | `boolean`                                   | `false`                   |
| `useCoarsePointer` | 是否扩大可点击元素的响应范围。`null`表示对移动设备开启；`true`表示总是开启；`false`表示总是不开启                                                                                                                                               | `boolean`                                   |                           |
| `pointerSize`      | 扩大元素响应范围的像素大小，配合`opts.useCoarsePointer`使用                                                                                                                                                                                     | `number`                                    |                           |
| `width`            | 可显式指定实例宽度，单位为像素。如果传入值为`null/undefined/'auto'`，则表示自动取`dom`（实例容器）的宽度                                                                                                                                        | `number`、`string`                          |                           |
| `height`           | 可显式指定实例高度，单位为像素。如果传入值为`null/undefined/'auto'`，则表示自动取`dom`（实例容器）的高度                                                                                                                                        | `number`、`string`                          |                           |
| `locale`           | 使用的语言，内置`ZH`和`EN`两个语言，也可以使用 [echarts.registerLocale](https://echarts.apache.org/zh/api.html#echarts.registerLocale) 方法注册新的语言包。目前支持的语言见 [src/i18n](https://github.com/apache/echarts/tree/release/src/i18n) | `string`                                    |                           |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法**      | **说明**                                                                                                                                                                           | **类型**                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `echarts`             | 返回的`echarts`，功能同 [echarts](https://echarts.apache.org/zh/api.html#echarts)                                                                                                  | `ECharts`                                                            |
| `setOptions`          | 根据配置项渲染`ECharts`，功能同 [setOption](https://echarts.apache.org/zh/option.html)                                                                                             | ` (options: UtilsEChartsOption, ...params: OptionsParams[]) => void` |
| `getInstance`         | 获取通过 [echarts.init](https://echarts.apache.org/zh/api.html#echarts.init) 创建的实例，功能同 [echartsInstance](https://echarts.apache.org/zh/api.html#echartsInstance)          | `ECharts`                                                            |
| `showLoading`         | 显示加载动画                                                                                                                                                                       | `(params: LoadOpts) => void`                                         |
| `hideLoading`         | 隐藏加载动画                                                                                                                                                                       | `() => void`                                                         |
| `clear`               | 清空当前`ECharts`实例，会移除实例中所有的组件和图表                                                                                                                                | `() => void`                                                         |
| `resize`              | 改变`ECharts`图表尺寸，使其自适应容器                                                                                                                                              | `() => void`                                                         |
| `getGlobalProperties` | 获取绑定到`echarts`的 [globalProperties](https://cn.vuejs.org/api/application.html#app-config-globalproperties)                                                                    | `() => EchartGlobalProperties`                                       |
| `getDom`              | 获取`ECharts`实例容器的`Dom`节点                                                                                                                                                   | `() => HTMLCanvasElement `                                           |
| `getWidth`            | 获取`ECharts`实例容器的宽度                                                                                                                                                        | `() => number `                                                      |
| `getHeight`           | 获取`ECharts`实例容器的高度                                                                                                                                                        | `() => number `                                                      |
| `getOption`           | 获取当前`ECharts`实例中维护的`option`对象                                                                                                                                          | `() => EChartsCoreOption `                                           |
| `appendData`          | 此方法用于，在大数据量（百万以上）的渲染场景，分片加载数据和增量渲染                                                                                                               | `(opts: AppendDataOpts) => void `                                    |
| `getDataURL`          | 导出图表图片，返回一个`base64`的`URL`，可以设置为`Image`的`src`                                                                                                                    | `(opts: DataURL) => string `                                         |
| `getConnectedDataURL` | 导出联动的图表图片，返回一个`base64`的`url`，可以设置为`Image`的`src`。导出图片中每个图表的相对位置跟容器的相对位置有关                                                            | `(opts: DataURL) => string `                                         |
| `addTooltip`          | 给`x`、`y`轴添加`Tooltip`文字提示。`x`代表`x轴` `y`代表`y轴` `true`(默认)代表`x、y轴` （该属性生效的前提是将 `xAxis` 或者 `yAxis` 添加`triggerEvent: true`属性，用到哪个添加哪个） | `(type: ToolTipType) => void `                                       |

##### `setOptions`详解

`setOptions`非常重要，渲染图表都靠它。下面我们来详细了解一下吧 😜

它接收无限参数，最重要的是第一个参数，完全兼容`echarts`提供的 [setOption](https://echarts.apache.org/zh/option.html) 方法中所传参数，当然也完全兼容 [GL配置](https://echarts.apache.org/zh/option-gl.html#globe)。不仅完全兼容，我们还额外新增四个`api`，如下

| **api**      | **说明**                                                                                                                                                                                           | **类型**            | **默认** |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| `clear`      | 是否清空当前实例，会移除实例中的图表，一般用于动态渲染                                                                                                                                             | `boolean`           | `true`   |
| `addTooltip` | 给`x`、`y`轴添加`Tooltip`文字提示，一般用于文字太长，`x`代表`x轴`， `y`代表`y轴` ， `true`代表`x、y轴`（该属性生效的前提是将 `xAxis` 或者 `yAxis` 添加`triggerEvent: true`属性，用到哪个添加哪个） | `string`、`boolean` |          |
| `delay`      | `window.onresize` 时改变图表尺寸的延时时间，单位毫秒。当 `echarts` 在拖拉窗口时不会自适应（一般不会出现这种情况），可以调整 `delay` 数值到自适应为止                                               | `number`            | `300`    |
| `resize`     | 是否监听页面`resize`事件并在页面`resize`时改变图表尺寸以适应当前容器，监听及改变，`true`代表监听，`false`代表不监听                                                                                | `boolean`           | `true`   |

上面说完第一个参数，那么剩余参数是干嘛的呢，请看下面的 [事件](useEcharts#事件) 解析

</div>

#### 事件

所有 [events](https://echarts.apache.org/zh/api.html#events) 都在 `setOptions` 里配置

```ts
const { setOptions } = useECharts(elRef);

setOptions(
  {
    /** 配置项 https://echarts.apache.org/zh/option.html */
  },
  // 从第二个参数起，后面传入的剩余参数都为事件
  {
    // 点击触发
    name: "click",
    callback: params => {
      console.log("click", params);
    }
  },
  {
    // 右键触发
    name: "contextmenu",
    callback: params => {
      console.log("contextmenu", params);
    }
  },
  // 点击空白处触发
  {
    type: "zrender",
    name: "click",
    callback: params => {
      console.log("点击空白处", params);
    }
  },
  ...
);
```

##### 剩余事件参数属性

<div class="pure-no-border">

| **属性**   | 必传 | **说明**                                                                                                                                                                                  | **类型**           |
| ---------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `name`     | 是   | 事件类型名称，具体看下面的`事件类型`详情                                                                                                                                                  | `ElementEventName` |
| `callback` | 是   | 回调函数，返回 [params](https://echarts.apache.org/zh/api.html#events.%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6) 参数                                                                          | `Fn`               |
| `query`    | 否   | `query`属性，点击 [此处](https://echarts.apache.org/handbook/zh/concepts/event/#%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%A4%84%E7%90%86) 搜索`query`进行了解                      | `string`、`object` |
| `type`     | 否   | `echarts`事件（默认）或 [zrender](https://echarts.apache.org/handbook/zh/concepts/event/#%E7%9B%91%E5%90%AC%E2%80%9C%E7%A9%BA%E7%99%BD%E5%A4%84%E2%80%9D%E7%9A%84%E4%BA%8B%E4%BB%B6) 事件 | `ElementEventType` |

##### `事件类型`详情

下面列出常用事件类型，当然更具体的可以看 [events](https://echarts.apache.org/zh/api.html#events) 都支持

| **name**              | **说明**                                       |
| --------------------- | ---------------------------------------------- |
| `click`               | 当用户点击图表时触发                           |
| `dblclick`            | 当用户双击图表时触发                           |
| `mousewheel`          | 当用户使用鼠标滚轮时触发的事件                 |
| `mouseout`            | 当鼠标从图表上的某个数据项移开时触发           |
| `mouseover`           | 当鼠标移动到图表上的某个数据项时触发           |
| `mouseup`             | 当用户在图表上释放鼠标按钮时触发               |
| `mousedown`           | 当用户在图表上按下鼠标按钮时触发               |
| `mousemove`           | 当用户移动鼠标指针在元素上方时触发             |
| `contextmenu`         | 当用户在图表上点击鼠标右键打开上下文菜单时触发 |
| `globalout`           | 当鼠标从整个图表区域移出时触发                 |
| `selectchanged`       | 当图表中的数据项被选中或取消选中时触发         |
| `legendselectchanged` | 当图例的选中状态发生变化时触发                 |
| `rendered`            | 当图表渲染结束时触发                           |

</div>

#### 类型声明

<details>

<summary>点击查看类型声明</summary>

<<< @/hooks/useEcharts/types/useEcharts.ts

</details>

闹闹叨叨说了这么多，能不能给我上实战？😕  
🥺 好的，哥哥姐姐，下面都是实际用例

### 偏业务示例

#### 加载动画

<visual-load>
<Eloading />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/business/loading.vue

</details>
</visual-load>

#### 动态图表

<visual-load>
<Edynamic />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/business/dynamic.vue

</details>
</visual-load>

#### 接口请求和图表下钻

<visual-load>

<ClientOnly>
  <Erequest />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/business/request.vue

</details>
  </visual-load>

#### 自定义主题

<visual-load>

在 [theme-builder](https://echarts.apache.org/zh/theme-builder.html) 配置好主题后，点击其网站左上角的下载主题，选择`JSON`版本，复制到本地的自定义主题`json`文件即可，如下图

<preview-image imgSrc="/custom-theme.jpg" />

<EcustomTheme />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/business/customTheme.vue

</details>
</visual-load>

### 常用示例

#### 折线图 line

<visual-load>
<Eline />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/line.vue

</details>
</visual-load>

#### 柱状图 bar

<visual-load>
<Ebar />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/bar.vue

</details>
</visual-load>

#### 饼图 pie

<visual-load>
<Epie />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/pie.vue

</details>
</visual-load>

#### 散点图 scatter

<visual-load>
<Escatter />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/scatter.vue

</details>
</visual-load>

#### K 线图 candlestick

<visual-load>
<Ecandlestick />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/candlestick.vue

</details>
</visual-load>

#### 雷达图 radar

<visual-load>
<Eradar />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/radar.vue

</details>
</visual-load>

#### 盒须图 boxplot

<visual-load>
<Eboxplot />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/boxplot.vue

</details>
</visual-load>

#### 热力图 heatmap

<visual-load>
<Eheatmap />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/heatmap.vue

</details>
</visual-load>

#### 关系图 graph

<visual-load>
<Egraph />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/graph.vue

</details>
</visual-load>

#### 树图 tree

<visual-load>
<Etree />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/tree.vue

</details>
</visual-load>

#### 旭日图 sunburst

<visual-load>
<Esunburst />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/sunburst.vue

</details>
</visual-load>

#### 桑基图 sankey

<visual-load>
<Esankey />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/sankey.vue

</details>
</visual-load>

#### 漏斗图 funnel

<visual-load>
<Efunnel />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/funnel.vue

</details>
</visual-load>

#### 仪表盘 gauge

<visual-load>
<Egauge />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/gauge.vue

</details>
</visual-load>

#### 象形柱图 pictorialBar

<visual-load>
<EpictorialBar />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/pictorialBar.vue

</details>
</visual-load>

#### 主题河流图 themeRiver

<visual-load>
  <EthemeRiver />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/simple/themeRiver.vue

</details>
</visual-load>

### 高级示例

在最右上角切换主题试试吧

#### demo1

<visual-load>
<ClientOnly>
  <Edemo1 />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo1.vue

</details>
</visual-load>

#### demo2

<visual-load>
<Edemo2 />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo2.vue

</details>
</visual-load>

#### demo3

<visual-load>
<Edemo3 />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo3.vue

</details>
</visual-load>

#### demo4

<visual-load>
<Edemo4 />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo4.vue

</details>
</visual-load>

#### demo5

<visual-load>
<Edemo5 />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo5.vue

</details>
</visual-load>

#### demo6

<visual-load>
<Edemo6 />

<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo/advanced/demo6.vue

</details>
</visual-load>

<visual-load>

::: info 平台维护组件推荐
在使用`ECharts`时，往往有地图需求，但`ECharts`在`V5`版本去除了内置的 [geoJSON](https://echarts.apache.org/handbook/zh/basics/release-note/v5-upgrade-guide/#%E5%8E%BB%E9%99%A4%E5%86%85%E7%BD%AE%E7%9A%84-geojson) ，这使得用户在`ECharts`的`v5`版本中使用地图时还需要自己找地图数据，为了解决这个问题 [@esmjs/geo](https://github.com/esmjs/geo) 诞生，它使用`rust`和`typescript`编写，简单易用
:::

::: info 更多`Demo`
就这点`demo`？好啦，别闹，这就把配方拿出来 [配方](https://www.isqqw.com/) （注册后登录，可免费查看全部图表代码，非广告，只是个人觉得不错，推荐给大家）
:::

</visual-load>
