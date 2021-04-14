# Cell 区块

## 基本用法

```html
<cap-pin v-model="pinValue"></cap-pin>
<cap-pin v-model="pinValue" type="block"></cap-pin>
```

## 自定义长度

```html
<cap-pin v-model="pinValue" :length="4"></cap-pin>
```

## 隐藏输入信息

```html
<cap-pin v-model="pinValue" password></cap-pin>
<cap-pin v-model="pinValue" password type="block" disabled></cap-pin>
```
## API

### Props

|  参数   | 说明  | 类型 | 默认值 | 版本
|  ----  | ----  | ---- | ---- | -
| v-model | 输入值，双向绑定 | string | - | -
| length | 长度(4-6位) | number | `6` | -
| password | 是否以密码形式显示 | boolean | `false` | -
| disabled | 是否禁用 | boolean | `false` | -
| type | 显示类型(基本样式、块级样式) | `basic` `block` | `basic` | -

### Event

| 事件名 |  说明 | 回调参数 | 版本
| ----  | ----  | -------  | ---
| change | 输入内容时触发 | (val: string) | -
