<script setup>
import loaders from './loaders.vue'
</script>

# useLoader

::: tip 适用于 `Vue3`、`Nuxt3`（后续将支持`React`和`Next`）
使用 `Promise` 动态加载 `link` 和 `script` 标签  
不会重复加载相同 `src` 的标签，在生命周期销毁时默认会自动移除标签
:::


<!-- <description description="使用`Promise`来动态加载`link`和`script`标签" :tagNameList="['Vue3']"  /> -->


## 基础用法

<loaders />

<details>

<summary>查看代码</summary>

<<< @/hooks/useLoader/loaders.vue

</details>

## 参数

- `destroy`：是否在生命周期结束后移除标签，默认 true

## 返回值或方法

- `loadCss`：动态加载`link`标签，它是个`Promise`。接收一个参数对象，对象包括`src`：加载的地址、`carrier`：标签插入到某个元素里，默认`head`
- `loadScript`：动态加载`script`标签，它是个`Promise`。接收一个参数对象，对象包括`src`：加载的地址、`carrier`：标签插入到某个元素里，默认`head`
