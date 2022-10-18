<script setup>
import formDataHander from './formDataHander.vue'
</script>

# 处理 FormData 传参

<ClientOnly>
  <description-popover :num="1" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## formDataHander

<ClientOnly>
  <description :isShowIcon="false" description="处理 FormData 传参" /> 
</ClientOnly>

### 参数

- 接收一个参数 `obj`，返回值类型 `FormData`

| **参数属性** | **说明**                                      | **类型** |
| ------------ | --------------------------------------------- | -------- |
| `obj`        | 参数，对象格式，例如：`{ a: 1, b: "2", ... }` | `object` |

### 基础用法

<ClientOnly>
  <formDataHander />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/formData/formDataHander.vue

</details>
