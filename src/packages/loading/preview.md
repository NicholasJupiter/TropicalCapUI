# Loading 加载

## 基本用法

打开/关闭

```javascript
// setup中使用
setup () {
  const { proxy } = getCurrentInstance()!;
  proxy.$loading.service({});
  setTimeout(() => {
    proxy.$loading.close();
  }, 3000);
}

// 其他方法使用
this.$loading.service({});
setTimeout(() => {
  this.$loading.close();
}, 3000);
```

## 插入DOM元素

```javascript
proxy.$loading.service({
  content: h('div', { style: 'color:red;' }, 'HTML代码段'),
  mask: false
});
```

## API

### options

|  参数   | 说明  | 类型 | 默认值 | 版本
|  ----  | ----  | ---- | ---- | -
| content | 显示文案 | string / VNode | `''` | -
| color | 加载效果的颜色 | string | `#6481DC` | -
| size | Loading大小 | number | `48` | -
| modal | 是否显示蒙层 | boolean | `true` | -