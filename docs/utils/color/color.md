<script setup>
import randomColor from './randomColor.vue'
import hexToRgb from './hexToRgb.vue'
import rgbToHex from './rgbToHex.vue'
import darken from './darken.vue'
import lighten from './lighten.vue'
</script>

# 颜色相关函数

<ClientOnly>
  <description-popover :num="5" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## randomColor

<ClientOnly>
  <description :isShowIcon="false" description="随机生成颜色" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <randomColor />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/color/randomColor.vue

</details>

## hexToRgb

<ClientOnly>
  <description :isShowIcon="false" description="hex转rgb" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <hexToRgb />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/color/hexToRgb.vue

</details>

## rgbToHex

<ClientOnly>
  <description :isShowIcon="false" description="rgb转hex" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <rgbToHex />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/color/rgbToHex.vue

</details>

## darken

<ClientOnly>
  <description :isShowIcon="false" description="颜色值加深" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <darken />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/color/darken.vue

</details>

## lighten

<ClientOnly>
  <description :isShowIcon="false" description="颜色值变浅" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <lighten />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/color/lighten.vue

</details>

::: tip

- 推荐文章  
  [CSS HSL 颜色](https://www.w3school.com.cn/css/css_colors_hsl.asp)

:::
