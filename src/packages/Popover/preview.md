# Popover 弹出框

## 基本用法
```html

<cap-popover title="New feature!" placement="top" theme="light">
  <template #content>
    <p style="font-size: 12px; line-height: 20px">
      This is a handy template you can use for your apps (as a an onboarding
      tip feature for instance). Feel free to resize it
    </p>
  </template>

  <template #footer>
    <cap-button size="small" type="assistant" round plain> Skip </cap-button>
    <cap-button size="small" type="assistant" round> Next </cap-button>
  </template>
  <cap-button size="large">Top</cap-button>
</cap-popover>

```

## API

### Props

|参数|说明|类型|可选值|默认值|版本
----|---|---|---|---| ---
| v-model:visibled | 显示状态| boolean | - | `false` | -
| placement | 出现位置 | string |   `auto`   `auto-start`   `auto-end`   `top`   `top-start`   `top-end`   `bottom`   `bottom-start`   `bottom-end`   `right`   `right-start` `right-end`  `left`  `left-start`  `left-end` | `auto` | - 
| disabled | Popover 是否禁用 | boolean | - | `false` | -
| theme | 主题色 | string | `dark` `light` | `light` | -
| title | 标题 | string | - |`''` | - 
| offset | 偏移量, 参考[Popper.js offset](https://popper.js.org/docs/v2/modifiers/offset/) | [number,number] | - | `[0, 20]` | - 
| popover-class | 为 Popover 添加类名 | string | - | `''` | - 
| popover-modifiers | [Popper.js参数配置](https://popper.js.org/docs/v2/) | array | - | - | -
### Slots

| 名称 | 说明 | 版本
----|---|---
| default | 触发 Popover 显示的 HTML 元素 | -
| content | Popover 主要内容 | -
| footer | Popover 底部内容 | -