# Toast 吐司弹窗

## 基本用法

```javascript
// setup 使用
const { proxy } = getCurrentInstance();
proxy.$toast.show({
  content: 'Toast content',
});

// 其他方法使用
this.$toast.show({
  content: 'Toast content',
});
```

## 插入DOM元素

```javascript
proxy.$toast.show({
  content: h('p', { style: 'color:red' }, '插入HTML代码')
});
```

## API

### options

|  参数   | 说明  | 类型 | 默认值 | 版本
|  ----  | ----  | ---- | ---- | -
| content | 显示文案 | string / VNode | `''` | -
| location | 显示位置 | `top` `bottom` | `bottom` | -
| offset | 偏移位置 | string | `16px` | -
| duration | 	展示时长(ms)，值为 0 时，toast 不会消失 | number | `2000` | -
| showClose | 是否显示关闭按钮 | boolean | `false` | - 
| clickFn | 点击事件 | (toastInstance) => void | `undefined` | - 
