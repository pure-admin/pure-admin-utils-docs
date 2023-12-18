# useLoader

::: tip 适用于 `Vue3`、`Nuxt3`
动态地将静态资源（`CSS`样式表或`JavaScript`脚本）加载到网页中
:::

### 最简代码

动态加载`CSS`样式表

```vue
<script setup lang="ts">
import { onMounted } from "vue";
import { useLoader } from "@pureadmin/utils";
const { loadCss } = useLoader();

onMounted(async () => {
  try {
    let result = await loadCss({
      src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
    });
    if (result) {
      // 加载成功要做的事
    }
  } catch (err) {
    // 加载失败要做的事
  }
});
</script>
```

### API

#### 参数

```ts
//  在此处配置参数
const {} = useLoader(destroy);
```

<div class="pure-no-border">

| **参数属性** | 必传 | **说明**                     | **类型**  | 默认值 |
| ------------ | ---- | ---------------------------- | --------- | ------ |
| `destroy`    | 否   | 是否在生命周期结束后移除标签 | `boolean` | `true` |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法** | **说明**                 | **类型**                                                        |
| ---------------- | ------------------------ | --------------------------------------------------------------- |
| `loadCss`        | 动态加载`CSS`样式表      | `(opts: OptionsScript/OptionsScript[])=> Promise<LoadResult[]>` |
| `loadScript`     | 动态加载`JavaScript`脚本 | `(opts: OptionsScript/OptionsScript[])=> Promise<LoadResult[]>` |

</div>

#### 类型声明

<<< @/hooks/useLoader/types/useLoader.ts

### 示例

```vue
<script setup lang="ts">
import { onMounted } from "vue";
import { useLoader } from "@pureadmin/utils";

const { loadCss, loadScript } = useLoader();

/** --------------- loadCss --------------- */

/** 动态加载单个link标签 */
loadCss({
  src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
})
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** 动态加载多个link标签（会按照传入src的先后顺序加载） */
loadCss({
  src: [
    "https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
    "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css",
    "https://cdn.bootcdn.net/ajax/libs/hint.css/2.7.0/hint.min.css"
  ]
})
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** 不同link标签可插入相同元素中 */
loadCss({
  src: [
    "https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
    "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css",
    "https://cdn.bootcdn.net/ajax/libs/hint.css/2.7.0/hint.min.css"
  ],
  element: "head" // "body"
})
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** 不同link标签可插入不同元素中 */
loadCss([
  {
    src: "https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
    element: "head"
  },
  {
    src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css",
    element: "head"
  },
  {
    src: "https://cdn.bootcdn.net/ajax/libs/hint.css/2.7.0/hint.min.css",
    element: "body"
  }
])
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** --------------- loadScript --------------- */

/** 动态加载单个script标签 */
loadScript({
  src: "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js"
})
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** 动态加载多个script标签（会按照传入src的先后顺序加载） */
loadScript({
  src: [
    "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js",
    "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js"
  ]
})
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** 不同script标签可插入相同元素中 */
loadScript({
  src: [
    "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js",
    "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js"
  ],
  element: "body" // "head"
})
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** 不同script标签可插入不同元素中 */
loadScript([
  {
    src: "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js",
    element: "head"
  },
  {
    src: "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js",
    element: "body"
  }
])
  .then(() => {
    // 加载成功要做的事
  })
  .catch(err => {
    // 加载失败要做的事
  });

/** --------------- loadCss、loadScript 结合使用 --------------- */
loadCss({
  src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
})
  .then(() => {
    loadScript({
      src: "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js"
    })
      .then(() => {})
      .catch(err => {});
  })
  .catch(err => {});
</script>
```

::: info 温馨提示

1. `src`最好指定版本号，有以下几个好处：  
   ① 可预测性：通过指定确切版本号，可以确保所有用户都加载相同版本的脚本，这有助于避免因为库更新导致的问题  
   ② 缓存优势：浏览器通常会缓存静态资源，如`JavaScript`文件。如果指定了版本号，当更新脚本并更改版本号时，用户的浏览器会加载新版本的文件，而不是使用缓存中可能已经过时的版本  
   ③ 避免`Breaking Changes`：如果没有指定版本号，而是使用了某个库的最新版本（例如通过链接到一个总是指向最新版本的`URL`），那么当该库发布包含破坏性更改的新版本时，网站或应用可能会意外地崩溃

2. 加载`CSS`样式时，要检查是否有样式冲突，避免网站样式被破坏

3. `loadCss`、`loadScript`结合使用时，一般情况先使用`loadCss`加载`CSS`样式后再用`loadScript`加载`JavaScript`脚本，有以下几个好处：  
   ① 渲染性能：网页在加载时，用户首先看到的是页面的内容和布局，这主要由`CSS`控制。将`CSS`放在前面可以确保在文档内容加载时样式已经就绪，这样用户就不会看到无样式或半样式的内容。等到页面结构和样式都加载完毕后，再加载`JS`就不会影响到用户对页面的初始印象  
   ② 避免`FOUC（Flash of Unstyled Content）`：如果`JS`在`CSS`之前加载，可能会导致页面内容在脚本执行完成之前无样式或样式不完整的情况，这种现象称为"无样式内容的闪烁"（`FOUC`）。加载完`CSS`后再加载`JS`可以最大限度地降低`FOUC`情况  
   ③ `JavaScript`依赖于`DOM`和样式：许多`JavaScript`脚本依赖于完全构建的`DOM`树，以及适当应用的样式来执行操作，如获取元素尺寸或位置。确保`CSS`先加载并应用，`JS`脚本才能正确地工作  
   ④ 阻塞行为：传统上，浏览器在解析到`<script>`标签时会停止构建`DOM`，直至脚本执行完毕。如果脚本很大或者加载时间较长，这会导致页面渲染的延迟  
   ⑤ 优化用户体验：用户对网页加载速度的感知很大程度上取决于页面内容的可视化进度。`CSS`负责页面的视觉呈现，而`JavaScript`可能负责交互和行为。优先加载`CSS`确保了用户可以尽快看到完整的页面，而`JavaScript`的加载和执行则可以在其后进行，一般不会影响用户对页面的初步浏览

4. `loadCss`默认把`CSS`（`link`标签）插入到`head`，当然也可以通过设置`element: "body"`将其插入到`body`，默认插入`head`的好处：  
   ① 文档渲染性能：将`<link>`标签放在`<head>`中可以让浏览器尽早知道需要加载的`CSS`文件，从而在渲染页面时就能应用样式，避免出现样式闪烁（也称为`FOUC`，即无样式内容的闪烁）  
   ② `HTML`标准：根据`HTML`规范，某些类型的`<link>`（如指向样式表的链接）应该放在`<head>`中，这样做是为了遵循标准并确保最佳实践  
   ③ 优先级和资源加载：将`<link>`标签放在`<head>`中可以定义资源加载的优先级，确保关键的`CSS`在内容加载之前就被加载和解析，有助于提高页面的可视性能

5. `loadScript`默认把`JavaScript`（`script`标签）插入到`body`底部，当然也可以通过设置`element: "head"`将其插入到`head`，默认插入`body`底部的好处：  
   ① 减少阻塞：浏览器在解析`HTML`并构建`DOM`时，当遇到`<script>`标签会暂停解析，以便先加载并执行脚本。如果脚本位于`<head>`中，这会导致页面渲染的延迟。将脚本放在底部意味着页面的主要内容可以在脚本加载和执行前先被渲染，从而提升用户体验  
   ② 依赖`DOM`元素：许多脚本依赖于页面中的`DOM`元素。将脚本放在底部确保了当脚本执行时，它依赖的`DOM`元素已经存在  
   ③ 当然你可能会有疑问，为什么不使用`async`或`defer`属性并将`<script>`标签放在`<head>`中，这样也不会堵塞页面啊？答：是不会堵塞页面。但当使用`async`属性时脚本的执行顺序不能保证，当使用`defer`属性时脚本会在整个页面解析完成后才加载，所以默认将`<script>`标签放在`<body>`底部是一个更可靠的选择

:::

<style scoped>
#VPContent > div > div > div.content > div > main > div > div > div:nth-child(11) > table > thead > tr > th:nth-child(2) {
  min-width: 210px;
}
</style>
