# Cell 区块

## 基本用法

```html
<cap-cell>Content</cap-cell>
```

## 使用插槽

```html
<cap-cell>
  <template #leading>
    <i class="eva eva-droplet" style="font-size:24px"></i>
  </template>
  <span>Content</span>
  <template #guide-text>
    <span style="color:#666;">View</span>
  </template>
  <template #trailing>
    <i class="eva eva-chevron-right-outline"></i>
  </template>
</cap-cell>
```
## API

### Slots

|  名称   | 说明  |  版本
|  ----  | ----  | -
| default | 内容展示区域 | -
| leading | 领导内容 | -
| guide-text  | 辅助文字 | -
| trailing  | 尾部内容 | -
