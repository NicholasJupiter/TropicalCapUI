# Avatar 头像

## 基本用法 

```html
<cap-avatar
  src="https://s3-alpha.figma.com/profile/0355a457-cc67-44b8-b3a9-f3cfc12916fa"
  size="large"
></cap-avatar>
<cap-avatar
  src="https://s3-alpha.figma.com/profile/0355a457-cc67-44b8-b3a9-f3cfc12916fa"
  round
  size="50px"
></cap-avatar>
```

## API

### Props 


|  参数   | 说明  | 类型 | 默认值 | 版本
|  ----  | ----  | ---- | ---- | -
| src | 图片路径 | string | `''` | -
| size | 图片大小 | string | `large` `medium` `small`  | `medium` | -
| bg-color | 背景色 | string | `''` | -
| round | 是否圆形 | boolean | `false` | -
