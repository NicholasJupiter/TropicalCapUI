# Toast 吐司提示

## 基本用法

```javascript
// setup 使用
const { proxy } = getCurrentInstance();
proxy.$toast.show({
  content: 'Toast content',
});
// 可直接传入内容
proxy.$toast.show('Toast content');

// vue2方法中使用
this.$toast.show({
  content: 'Toast content',
});
```


## 使用HTML

```javascript
proxy.$toast.show({
  content: `<p style="color:red">插入HTML</p>`
});
```

## 使用JSX和Vnode

```javascript
// jsx
proxy.$toast.show({
  content: <p style="color:red;">JSX</p>
});
// vnode
proxy.$toast.show(h('soan', 'VNode'));
```

## API

### options

|  参数   | 说明  | 类型 | 默认值 | 版本
|  ----  | ----  | ---- | ---- | -
| content | 显示文案, 可当作第一个参数直接传入内容 | string / VNode | `''` | -
| location | 显示位置 | `top` `bottom` | `bottom` | -
| offset | 偏移位置 | string | `16px` | -
| duration | 	展示时长(ms)，值为 0 时，toast 不会消失 | number | `2000` | -
| showClose | 是否显示关闭按钮 | boolean | `false` | - 
| clickFn | 点击事件 | (toastInstance) => void | `null` | - 
