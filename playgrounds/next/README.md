## 特别注意

- 需要将下面代码加入 `next.config.js`

```js
webpack(config) {
  config.resolve.fallback = { fs: false }
  return config
}
```
