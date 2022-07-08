<script setup>
import draggable from './draggable.vue'
</script>

# useDraggable

<ClientOnly>
  <description description="使元素可拖动" /> 
</ClientOnly>

- 返回响应式对象`transform`：包含当前被拖动元素所在的`offsetX`、`offsetY`

## 基础用法
<ClientOnly>
  <draggable />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useDraggable/draggable.vue

</details>