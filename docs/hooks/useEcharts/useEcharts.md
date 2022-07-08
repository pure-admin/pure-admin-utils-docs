<script setup>
import demo from './demo.vue'
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
import App from './App.vue'

import * as echarts from "echarts";

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;

app.mount('#app')
```

## 基础用法

<ClientOnly>
  <demo />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useEcharts/demo.vue

</details>

## 元素挂载以及配置

## 返回值或方法
