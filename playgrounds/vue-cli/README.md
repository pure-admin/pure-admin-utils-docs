## 特别注意

- 需要将下面代码加入 `vue.config.js`

```js
configureWebpack: {
  resolve: {
    fallback: {
      "fs": false
    },
  }
}
```
