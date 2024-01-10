<script setup>
import demo from './demo.vue'
</script>

# useGlobal

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
获取已经注册的全局属性对象 [globalProperties](https://cn.vuejs.org/api/application.html#app-config-globalproperties)
:::

`useGlobal`只做两件事，第一快速提取`globalProperties`，第二更方便、明确的类型提示

#### 既然想获取全局`globalProperties`，肯定要先注册它呀（第一步）

::: code-group

```ts [Vue3]
// main.ts
import { type App, createApp } from "vue";
import App from "./App.vue";

import * as echarts from "echarts";

const app = createApp(App);
// 这里我们就以注册$echarts为例
app.config.globalProperties.$echarts = echarts;

app.mount("#app");
```

```ts [Nuxt3]
// plugins/config.ts
import * as echarts from "echarts";

export default defineNuxtPlugin(nuxtApp => {
  // 这里我们就以注册$echarts为例
  nuxtApp.vueApp.config.globalProperties.$echarts = echarts;
});
```

:::

#### 全局类型声明（第二步）

<<< ../../global.d.ts

#### 在组件中使用它（第三步即最后一步）

<<< @/hooks/useGlobal/demo.vue

##### 获得类型提示，如下图

<preview-image imgSrc="/echarts1.jpg" />

##### 获得实例的属性和方法，如下图

<preview-image imgSrc="/echarts2.jpg" />
