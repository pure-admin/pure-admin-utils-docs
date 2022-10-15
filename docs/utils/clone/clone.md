<script setup>
import clone from './clone.vue'
import hasOwnProp from './hasOwnProp.vue'
</script>

# 浅拷贝/深拷贝、判断对象自身属性中是否具有指定的属性

<ClientOnly>
  <description-popover :num="2" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## clone

<ClientOnly>
  <description :isShowIcon="false" description="浅拷贝/深拷贝" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <clone />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/clone/clone.vue

</details>

## hasOwnProp

<ClientOnly>
  <description :isShowIcon="false" description="判断对象自身属性中是否具有指定的属性" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <hasOwnProp />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/clone/hasOwnProp.vue

</details>

:::tip
浅拷贝：只拷贝一层，更深层次对象级别的只会拷贝引用`地址`（不影响`基本数据类型`）  
深拷贝：指源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响，每一层都会拷贝（既不影响`基本数据类型`，又不影响`引用数据类型`）
:::
