<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)
</script>

::: tip 支持任意 `JavaScript` 环境或框架
处理 `FormData` 传参
:::

## formDataHander

处理 `FormData` 传参，常用于发送表单数据或进行文件上传

<div class="pure-border">

#### <divider-base /> {#base1}

- 未使用 `formDataHander`

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
  .then(({ data }) => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

- 使用 `formDataHander`

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
  .then(({ data }) => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

#### <divider-param /> {#param1}

接收一个参数 `obj`，返回值类型 `FormData`

| **参数属性** | **说明**                                                     | **类型** |
| ------------ | ------------------------------------------------------------ | -------- |
| `obj`        | `FormData` 参数对象。如：`{ username: 'boy', age: 18, ... }` | `object` |

</div>

## createFormData

处理 `FormData` 传参，比 `formDataHander` 更灵活强大。`formDataHander` 支持的 `createFormData` 都支持，下面仅演示 `formDataHander` 不支持的

<div class="pure-border">

#### <divider-base title="基础用法一" /> {#base2-1}

有些参数是在循环中，比如上传文件时后端接口支持多个 `file`

```ts
import axios from "axios";
// 假设有下面一个表单数据对象
const formObject = {
  // 比如 fileList 存放多个文件，需要给后端接口的 File 对象在 raw 字段中
  files: fileList.map(file => ({ raw: file.raw })), // files 字段可以随便填写，实际返回的字段是 file 。当然返回的 file 字段也可以自定义，具体看下面的基础用法二、三  // [!code warning]
  username: "小明",
  age: 18
};
// 创建 FormData 并传入表单数据对象
const formData = createFormData(formObject);
// 使用 axios 发送 FormData
axios
  .post("your-url", formData, {
    headers: {
      // 通知服务器即将发送的是表单数据
      "Content-Type": "multipart/form-data"
    }
  })
  .then(({ data }) => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

上面代码对应 Payload 中的 Form data 如下（假设 fileList 中有三个文件）

```
file: (binary)
file: (binary)
file: (binary)
username: 小明
age: 18
```

#### <divider-base title="基础用法二" /> {#base2-2}

通过 `fileKey` 自定义文件字段的键名，默认为 `file`

```ts
const formObject = {
  // 此时传给后端接口的文件字段名都为 customFile
  files: fileList.map(file => ({ raw: file.raw })), // [!code warning]
  username: "小明",
  age: 18
};
const formData = createFormData(formObject, { fileKey: "customFile" });
```

上面代码对应 Payload 中的 Form data 如下（假设 fileList 中有两个文件）

```
customFile: (binary)
customFile: (binary)
username: 小明
age: 18
```

#### <divider-base title="基础用法三" /> {#base2-3}

通过 `handleFile` 自定义处理文件的函数

```ts
const formObject = {
  files: fileList.map(file => ({ raw: file.raw })),
  username: "小明",
  age: 18
};
const formData = createFormData(formObject, {
  handleFile: ({ file, formData }) => {
    // 获取文件的 MIME 类型
    const fileType = file.type;
    // 根据文件类型进行对应处理
    switch (fileType) {
      case "image/jpeg":
        // 将传给后端接口的 jpeg 文件键名改为 jpegFile 当然也可以对文件进行处理，如转换为 Base64 编码或压缩文件后再传给后端
        formData.append("jpegFile", file);
        break;
      case "image/png":
        // 将传给后端接口的 png 文件键名改为 pngFile
        formData.append("pngFile", file);
        break;
      default:
        // 将传给后端接口的其他文件键名改为 otherFile
        formData.append("otherFile", file);
        break;
    }
  }
});
```

上面代码对应 Payload 中的 Form data 如下

```
otherFile: (binary)
pngFile: (binary)
jpegFile: (binary)
username: 小明
age: 18
```

#### <divider-base title="基础用法四" /> {#base2-4}

通过 `filter` 定义需要过滤掉的值，它们不会出现在请求参数中

```ts
const formObject = {
  files: fileList.map(file => ({ raw: file.raw })),
  username: "小明",
  age: null, // [!code --]
  hobby: undefined, // [!code --]
  job: "", // [!code --],
  address: {
    street: "幸福街",
    city: "信阳市"
  }
};
// 上面的 age、hobby、job 字段不会传给后端接口
const formData = createFormData(formObject, { filter: [null, undefined, ""] });
```

上面代码对应 Payload 中的 Form data 如下（假设 fileList 中有两个文件）

```
file: (binary)
file: (binary)
username: 小明
address[street]: 幸福街
address[city]: 信阳市
```

#### <divider-param /> {#param2}

接收两个参数，第一个参数 `obj` ，第二个参数 `options` ，返回值类型 `FormData`

| **参数属性** | **说明**                                | **类型**              |
| ------------ | --------------------------------------- | --------------------- |
| `obj`        | `FormData` 参数对象                     | `Record<string, any>` |
| `options`    | 额外参数对象，具体看下面的`options`详情 | `FormDataOptions`     |

#### `options`详情

| **属性**     | **说明**                                     | **类型**                           | 默认值 |
| ------------ | -------------------------------------------- | ---------------------------------- | ------ |
| `fileKey`    | 用于指定文件字段的键名                       | `string`                           | `file` |
| `handleFile` | 自定义处理文件的函数，返回一个`params`对象   | `(params: HandleFileType) => void` |        |
| `filter`     | 定义需要过滤掉的值，它们不会出现在请求参数中 | `any[]`                            |        |

#### <divider-type /> {#type2}

<<< @/utils/formData/types/createFormData.ts

</div>

<style scoped>
#VPContent > div > div > div.content > div > main > div > div > div:nth-child(7) > table:nth-child(25) > thead > tr > th:nth-child(4) {
  min-width: 80px;
}
</style>
