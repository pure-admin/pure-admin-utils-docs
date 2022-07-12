<script setup>
import echarts from './echarts.vue'
</script>

# useEcharts

<ClientOnly>
  <description description="渲染Echarts" /> 
</ClientOnly>

## 使用前提

- 将`echarts`绑定到全局property上，做法如下：(这里我全局引入了`echarts`，你也可参考 [按需引入](https://echarts.apache.org/handbook/zh/basics/import#%E5%9C%A8-typescript-%E4%B8%AD%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5)
```ts
// main.ts
import { type App, createApp } from "vue";
import App from "./App.vue";

import * as echarts from "echarts";

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;

app.mount('#app');
```

## 基础用法

<ClientOnly>
  <echarts />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/echarts.vue

</details>

## 参数

- `elRef`：必传`Ref`，[组件实例](https://vuejs.org/guide/essentials/template-refs.html#ref-on-component)  
- `options`：接收两个可选参数。第一个`theme`：[主题](https://echarts.apache.org/handbook/zh/concepts/style#%E9%A2%9C%E8%89%B2%E4%B8%BB%E9%A2%98%EF%BC%88theme%EF%BC%89)，可选`default`（默认）、`light`、`dark`，当然也可以[自定义主题](https://echarts.apache.org/zh/theme-builder.html)。第二个`tooltipId`：给`x`、`y`轴添加`Tooltip`文字提示的元素`id`，默认`tooltipElement`

## 返回值或方法

- `echarts`：Echarts
- `setOptions`：第一个参数`options`：设置图表的`配置项`和`数据`（除了echarts配置项[api](https://echarts.apache.org/zh/option.html#title)之外，我们还增加了额外的两个`api`，如下：
```js
{
  // 可选，清空当前实例，会移除实例中所有的组件和图表，一般用于动态渲染，默认：`true`
  clear: true,
  // 可选，给`x`、`y`轴添加`Tooltip`文字提示，一般用于文字太长，`x`代表`x轴`   `y`代表`y轴`   `true`(默认)代表`x、y轴`（该属性生效的前提是将 `xAxis` 或者 `yAxis` 添加`triggerEvent: true`属性，用到哪个添加哪个）
  addTooltip: true
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
}
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
- `getConnectedDataURL`：导出联动的图表图片，返回一个`base64`的`url`，可以设置为`Image`的`src`。导出图片中每个图表的相对位置跟容器的相对位置有关
