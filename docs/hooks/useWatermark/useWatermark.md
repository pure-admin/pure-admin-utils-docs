<script setup>
import { 
  Wwhole, 
  Wpart, 
  Wforever
} from './demo/index.ts'
</script>

# useWatermark

::: tip 适用于 `Vue3`、`Nuxt3`
给元素加水印，自适应容器
:::

### 最简代码

添加`水印`最简单的代码

```vue
<script setup lang="ts">
import { useWatermark } from "@pureadmin/utils"; // [!code focus]
const { setWatermark } = useWatermark(); // [!code focus]
setWatermark("我是水印"); // [!code focus]
</script>
```

### API

#### 参数

```ts
//  在此处配置参数
const {} = useWatermark(appendEl);
```

<div class="pure-no-border">

| **参数属性** | 必传 | **说明**                     | **类型**           |
| ------------ | ---- | ---------------------------- | ------------------ |
| `appendEl`   | 否   | 要添加水印的主体，默认`body` | `Ref<HTMLElement>` |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法** | **说明**                                                                     | **类型**                                           |
| ---------------- | ---------------------------------------------------------------------------- | -------------------------------------------------- |
| `setWatermark`   | 根据自定义配置项添加水印，具体看下面的 [详解](useWatermark#setwatermark详解) | `(str: string, attr?: attr ｜ undefined) => void ` |
| `clear`          | 销毁水印                                                                     | `() => void`                                       |

##### `setWatermark`详解

它接收两个参数，如下

| **参数** | **说明**                                                     | **类型** |
| -------- | ------------------------------------------------------------ | -------- |
| `str`    | 水印值                                                       | `string` |
| `attr`   | 水印样式属性，具体看下面的 [类型声明](useWatermark#类型声明) | `attr`   |

</div>

#### 类型声明

<<< @/hooks/useWatermark/types/useWatermark.ts

### 示例

#### 整页水印

<Wwhole />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demo/whole.vue

</details>

#### 局部水印

不论整页水印还是局部水印，它们都拥有上面类型声明中的 [attr](useWatermark#类型声明) 水印样式属性。

<Wpart />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demo/part.vue

</details>

#### 永久水印

通过浏览器提供的 [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 实现无法删除的永久水印。当然也不是绝对无法删除，但是能很大程度防止删除。如果想要删除，只能通过特殊的禁用`JavaScript`等方法来实现。

<Wforever />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demo/forever.vue

</details>
