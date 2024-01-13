<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)
</script>

::: tip 仅用于`Vue3`
组件注册
:::

## withInstall

向组件中添加 `install` 方法，使其既可以使用 `app.component` 注册又可以使用 `app.use` 安装，且无需考虑 `TypeScript` 类型

<div class="pure-border">

接收两个参数，第一个 `main`，第二个 `extra`

| **参数属性** | **说明**                                       |
| ------------ | ---------------------------------------------- |
| `main`       | 主组件（第一个被注册的组件）                   |
| `extra`      | 额外组件，对象格式（会按照传入的先后顺序注册） |

</div>

::: info 提示信息
每个使用 `withInstall` 的组件都应该有个唯一 `name`，以便兼容各种场景。如果要在全局中使用，组件名需传 `name` 值
:::

## withNoopInstall

向组件中添加空的`install`方法，接收一个参数 `component` 组件

::: info 使用场景
不希望组件自动注册，或者想要在控制注册时机和方式时提供灵活性。例如，想要在某些条件满足时才注册组件，或者已经有了注册逻辑的其他实现方式
:::
