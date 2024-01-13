<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)
</script>

::: tip 支持任意 `JavaScript` 环境或框架
处理 `FormData` 传参
:::

## formDataHander

处理 `FormData` 传参，常用于发送表单数据或进行文件上传

<div class="pure-border">

接收一个参数 `obj`，返回值类型 `FormData`

| **参数属性** | **说明**                                                     | **类型** |
| ------------ | ------------------------------------------------------------ | -------- |
| `obj`        | `FormData` 参数对象。如：`{ username: 'boy', age: 18, ... }` | `object` |

</div>

### 未使用 `formDataHander`

常见`FormData`格式传参。如果有很多参数，代码就显得臃肿，如下

```ts
import axios from "axios";
// 假设有下面一个表单数据对象
const formObject = {
  username: "小明",
  age: 18,
  sex: "男",
  hobby: "编码",
  job: "前端工程师",
  profilePicture: file // 这是一个文件对象，比如从<input type="file">中获取的
};
// 创建 FormData
const formData = new FormData();
// 手动添加键值对到 FormData 对象中（显得臃肿）
formData.append("username", formObject.username);
formData.append("age", formObject.age);
formData.append("sex", formObject.sex);
formData.append("hobby", formObject.hobby);
formData.append("job", formObject.job);
formData.append("profilePicture", formObject.profilePicture);
// 使用 axios 发送 FormData
axios
  .post("your-url", formData, {
    headers: {
      // 通知服务器即将发送的是表单数据
      "Content-Type": "multipart/form-data"
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

### 使用 `formDataHander`

简化 `FormData` 传参，如下

```ts
import axios from "axios";
// 假设有下面一个表单数据对象
const formObject = {
  username: "小明",
  age: 18,
  sex: "男",
  hobby: "编码",
  job: "前端工程师",
  profilePicture: file // 这是一个文件对象，比如从<input type="file">中获取的
};
// 创建 FormData 并传入表单数据对象
const formData = formDataHander(formObject);
// 使用 axios 发送 FormData
axios
  .post("your-url", formData, {
    headers: {
      // 通知服务器即将发送的是表单数据
      "Content-Type": "multipart/form-data"
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```
