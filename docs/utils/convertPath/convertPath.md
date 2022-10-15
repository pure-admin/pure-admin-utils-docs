<script setup>
import convertPath from './convertPath.vue'
</script>

# 路径转换相关函数

<ClientOnly>
  <description-popover :num="1" :tagNameList="['Node']" />
</ClientOnly>

## convertPath

<ClientOnly>
  <description :isShowIcon="false" description="将 Windows 反斜杠路径转换为斜杠路径" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <convertPath />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/convertPath/convertPath.vue

</details>
