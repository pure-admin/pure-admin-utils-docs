<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(5)
</script>

<!-- # 经纬度坐标 -->

::: tip 支持任意 `JavaScript` 环境或框架
经纬度坐标
:::

<!-- <description-popover :num="5" :tagNameList="['浏览器','Node']" /> -->

## bd09togcj02

::: info 作用：百度坐标系 `BD-09` 与火星坐标系 `GCJ-02` 的转换（即百度转谷歌、高德）
:::

<!-- <description :isShowIcon="false" description="百度坐标系 `BD-09` 与火星坐标系 `GCJ-02` 的转换（即百度转谷歌、高德）" /> -->

### 参数

- 接收两个参数，第一个 `lng`，第二个 `lat`，返回经、纬度组成的数组，返回值类型为 `Array<number>`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `lng`        | 经度     | `number` |
| `lat`        | 纬度     | `number` |

## gcj02tobd09

::: info 作用：火星坐标系 `GCJ-02` 与百度坐标系 `BD-09` 的转换（即谷歌、高德 转百度）
:::

<!-- <description :isShowIcon="false" description="火星坐标系 `GCJ-02` 与百度坐标系 `BD-09` 的转换（即谷歌、高德 转百度）" /> -->

### 参数

- 接收两个参数，第一个 `lng`，第二个 `lat`，返回经、纬度组成的数组，返回值类型为 `Array<number>`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `lng`        | 经度     | `number` |
| `lat`        | 纬度     | `number` |

## wgs84togcj02

::: info 作用：`WGS-84` 转 `GCJ-02`
:::

<!-- <description :isShowIcon="false" description="`WGS-84` 转 `GCJ-02`" /> -->

### 参数

- 接收两个参数，第一个 `lng`，第二个 `lat`，返回经、纬度组成的数组，返回值类型为 `Array<number>`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `lng`        | 经度     | `number` |
| `lat`        | 纬度     | `number` |

## gcj02towgs84

::: info 作用：`GCJ-02` 转换为` WGS-84`
:::

<!-- <description :isShowIcon="false" description="`GCJ-02` 转换为` WGS-84`" /> -->

### 参数

- 接收两个参数，第一个 `lng`，第二个 `lat`，返回经、纬度组成的数组，返回值类型为 `Array<number>`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `lng`        | 经度     | `number` |
| `lat`        | 纬度     | `number` |

## out_of_china

::: info 作用：判断是否是国外（非中国）坐标
:::

<!-- <description :isShowIcon="false" description="判断是否是国外（非中国）坐标" /> -->

### 参数

- 接收两个参数，第一个 `lng`，第二个 `lat`，返回 `true`（在国外）、`false`（在国内），返回值类型为 `boolean`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `lng`        | 经度     | `number` |
| `lat`        | 纬度     | `number` |

::: warning 推荐文章
[百度 BD09 坐标系](https://baijiahao.baidu.com/s?id=1652433444439597387&wfr=spider&for=pc)  
 [WGS-84 坐标系](https://baike.baidu.com/item/WGS-84%E5%9D%90%E6%A0%87%E7%B3%BB/730443?fr=aladdin)  
 [什么是火星坐标系 GCJ-02](https://blog.csdn.net/mrib/article/details/78032562)  
 [中国的经纬度是多少？](https://zhidao.baidu.com/question/1244677296430089899.html)  
中国的经纬度范围大约为：经度 `73.66` ~ `135.05`、纬度 `3.86` ~ `53.55`
:::
