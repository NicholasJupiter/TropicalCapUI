# Overlay 弹出蒙版

## 使用方法

```html
<cap-overlay v-model:visibled="visibled">
  蒙版内容
</cap-overlay>
```

## API

### Props

|  参数   | 说明  | 类型 | 默认值 | 版本
|  ----  | ----  | ---- | ---- | -
| v-model:visibled | 是否显示 | boolean | `false` | -
| bg-color | 加载效果的颜色 | string | `rgba(0, 0, 0, 0.4)` | -
| custom-class | 自定义class | string | `''` | -
| close-on-click | 是否点击蒙层关闭 | boolean | `true` | -
| lock-scroll | 背景是否锁定 | boolean | `true` | -