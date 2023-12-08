<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)
</script>

::: tip 支持任意运行在 `Node` 的 `JavaScript` 语言
包大小计算
:::

## getPackageSize

获取指定文件夹中所有文件的总大小

<div class="pure-border">

### <divider-use /> {#use1}

[demo1](https://github.com/pure-admin/vue-pure-admin/blob/main/build/info.ts#L37)、[demo2](https://github.com/pure-admin/pure-admin-release/blob/main/src/index.ts#L56)

#### <divider-param /> {#param1}

接收一个参数 `options`

| **参数属性** | **说明**                                  | **类型**     |
| ------------ | ----------------------------------------- | ------------ |
| `options`    | 拥有三个属性，具体看下面的 `options` 详情 | `packageOpt` |

#### <divider-options /> {#options1}

| **参数属性** | **说明**                                                               | **类型**           | **默认值** |
| ------------ | ---------------------------------------------------------------------- | ------------------ | ---------- |
| `folder`     | 文件夹名                                                               | `string`           | `dist`     |
| `format`     | 是否返回已经转化好单位的包总大小 （通过下面的 `formatBytes` 函数转化） | `boolean`          | `true`     |
| `callback`   | 回调函数，返回包总大小（单位：字节）                                   | `CallableFunction` |            |

#### <divider-type /> {#type1}

<<< @/utils/packageSize/types/getPackageSize.ts

</div>
