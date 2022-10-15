<script setup>
import banMouseEvent from './banMouseEvent.vue'
import allowMouseEvent from './allowMouseEvent.vue'
</script>

# 禁止、允许指定的鼠标事件

<ClientOnly>
  <description-popover :num="2" />
</ClientOnly>

## banMouseEvent

<ClientOnly>
  <description :isShowIcon="false" description="禁止指定的鼠标事件" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <banMouseEvent />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/banMouseEvent/banMouseEvent.vue

</details>

## allowMouseEvent

<ClientOnly>
  <description :isShowIcon="false" description="允许指定的鼠标事件" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <allowMouseEvent />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/banMouseEvent/allowMouseEvent.vue

</details>
