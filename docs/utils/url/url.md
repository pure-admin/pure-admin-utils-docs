<script setup>
import getQueryMap from './getQueryMap.vue'
import getLocation from './getLocation.vue'
</script>

# 提取 url 中所有参数、获取当前的 location 信息

<ClientOnly>
  <description-popover :num="2" :tagNameList="['浏览器']" />
</ClientOnly>

## getQueryMap

<ClientOnly>
  <description :isShowIcon="false" description="提取浏览器 url 中所有参数" /> 
</ClientOnly>

### 参数

- 接收一个参数 `url` ，返回值类型 `object`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `url`        | 超链接地址 | `string` |

### 基础用法

<ClientOnly>
  <getQueryMap />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/url/getQueryMap.vue

</details>

## getLocation

<ClientOnly>
  <description :isShowIcon="false" description="获取浏览器当前的 location 信息" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <getLocation />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/url/getLocation.vue

</details>
