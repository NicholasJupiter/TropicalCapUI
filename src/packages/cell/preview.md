# Cell 区块

## 基本用法

```html
<cap-cell>Content</cap-cell>
```

## ICON&图片

```html
<cap-cell @click="handleClick">
  <template #leading>
    <cap-icon icon="droplet" size="36px"></cap-icon>
  </template>
  <span>Content</span>
  <template #guide-text>
    <span style="color: #666">View</span>
  </template>
</cap-cell>
```

## 链接

```html
<cap-cell @click="handleClick" is-link>
  <span>跳转</span>
  <template #guide-text>
    <span style="color: #666">view</span>
  </template>
</cap-cell>
```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本
| --- | --- | --- | ----    | ----
| is-link | 是否展示右侧箭头 并点击反馈 | boolean | `false` | -

### Slots

|  名称   | 说明  |  版本
|  ----  | ----  | -
| default | 内容展示区域 | -
| leading | 领导内容 | -
| guide-text  | 辅助内容 | -
| trailing  | 尾部内容 | -
