<script setup>
import loaders from './loaders.vue'
</script>

# useLoader

<ClientOnly>
  <description description="动态加载link和script标签" /> 
</ClientOnly>

- 不会重复加载相同`src`的标签，在生命周期销毁时默认会自动移除标签

## 基础用法
<ClientOnly>
  <loaders />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useLoader/loaders.vue

</details>

## 参数

- `destroy`：是否在生命周期结束后移除标签，默认true

## 返回值或方法

- `loadCss`：动态加载`link`标签，它是个`Promise`。接收一个参数对象，对象包括`src`：加载的地址、`carrier`：标签插入到某个元素里，默认`head`  
- `loadScript`：动态加载`script`标签，它是个`Promise`。接收一个参数对象，对象包括`src`：加载的地址、`carrier`：标签插入到某个元素里，默认`head`