# 包大小计算相关函数

<ClientOnly>
  <description-popover :num="2" :tagNameList="['Node']" />
</ClientOnly>

## getPackageSize

<ClientOnly>
  <description :isShowIcon="false" description="获取指定文件夹中所有文件的总大小" /> 
</ClientOnly>

### 参数

- 接收一个参数 `options`

| **参数属性** | **说明**                                  | **类型**     |
| ------------ | ----------------------------------------- | ------------ |
| `options`    | 拥有三个属性，具体看下面的 `options` 详情 | `packageOpt` |

#### `options` 详情

| **参数属性** | **说明**                                                               | **类型**           | **默认值** |
| ------------ | ---------------------------------------------------------------------- | ------------------ | ---------- |
| `folder`     | 文件夹名                                                               | `string`           | `dist`     |
| `format`     | 是否返回已经转化好单位的包总大小 （通过下面的 `formatBytes` 函数转化） | `boolean`          | `true`     |
| `callback`   | 回调函数，返回包总大小（单位：字节）                                   | `CallableFunction` | -          |

### 类型声明

<<< @/utils/packageSize/types/getPackageSize.ts

### 具体使用参考

- [demo1](https://github.com/xiaoxian521/vue-pure-admin/blob/main/build/info.ts#L34)
- [demo2](https://github.com/xiaoxian521/pure-admin-release/blob/main/src/index.ts#L49)

## formatBytes

<ClientOnly>
  <description :isShowIcon="false" description="将字节单位智能转化成 Bytes 、 KB 、 MB 、 GB 、 TB 、 PB 、 EB 、 ZB 、 YB 其中的一种" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个 `byte`，第二个 `digits`，返回智能转化字节单位后的值，返回值类型为 `string`

| **参数属性** | **说明**             | **类型** | **默认值** |
| ------------ | -------------------- | -------- | ---------- |
| `byte`       | 字节                 | `number` | -          |
| `digits`     | 四舍五入保留几位小数 | `number` | `2`        |
