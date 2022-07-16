<script setup>
import Index from './index.vue'
</script>

# link

<ClientOnly>
  <description :tagNameList="['浏览器']" description="创建超链接" /> 
</ClientOnly>

## 基础用法
<ClientOnly>
  <Index />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/link/index.vue

</details>

## 参数

- `href`：要跳转的超链接地址  
- `target`：请看下表：

| **属性**    | **说明**                           |
| ----------- | ---------------------------------- |
| *_blank*    | *在新窗口中打开被链接文档（默认）* |
| *_self*     | *在相同的框架中打开被链接文档*     |
| *_parent*   | *在父框架集中打开被链接文档*       |
| *_top*      | *在整个窗口中打开被链接文档*       |
| *framename* | *在指定的框架中打开被链接文档*     |