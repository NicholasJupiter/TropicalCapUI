# Slider 滑块

## 基本用法

```html
<cap-slider v-model="sliderValue"></cap-slider>
<cap-slider v-model="sliderValue" type="round"></cap-slider>
```

## 区间滑块

```html
<cap-slider
  v-model:minValue="minValue"
  v-model:maxValue="maxValue"
  range
></cap-slider>
```

## 数值提示
```html
<cap-slider
  v-model="sliderValue"
  tip-number
></cap-slider>

<cap-slider
  v-model:minValue="minValue"
  v-model:maxValue="maxValue"
  range
  type="round"
  tip-number
></cap-slider>

<cap-slider
  v-model="sliderValue"
  :tip-formatter="(val) => val + '%'"
  tip-number
></cap-slider>
```
## 设置步长
```html
<cap-slider
  v-model:minValue="minValue"
  v-model:maxValue="maxValue"
  :steps="20"
  range
></cap-slider>

<cap-slider v-model="sliderValue" :steps="20"></cap-slider>
```

## 设置最大最小值

```html
<cap-slider
  v-model:minValue="minValue"
  v-model:maxValue="maxValue"
  min="20"
  max="200"
  range
></cap-slider>
<cap-slider v-model="sliderValue" min="20" max="200"></cap-slider>
```

## 使用插槽
```html
<cap-slider v-model="sliderValue">
  <template #leading>
    <cap-icon icon="sun"></cap-icon>
  </template>
</cap-slider>

<cap-slider v-model="sliderValue">
  <template #leading>
    <cap-icon icon="thermometer-minus"></cap-icon>
  </template>
  <template #trailing>
    <cap-icon icon="thermometer-plus"></cap-icon>
  </template>
</cap-slider>
```

## 禁用
```html
<cap-slider
  v-model:minValue="minValue"
  v-model:maxValue="maxValue"
  disabled
  range
></cap-slider>
<cap-slider v-model="sliderValue" disabled></cap-slider>
<cap-slider v-model="sliderValue" disabled type="round"></cap-slider>
```

## API

### Props

|  参数   | 说明  | 类型 | 默认值 | 版本
|  ----  | ----  | ---- | ---- | -
| v-model | 输入值(适用于非区间滑块) | number | - | -
| v-model:minValue | 区间滑块第一个值 | number | - | -
| v-model:maxValue | 区间滑块第二个值 | number | - | -
| min | 最小值 | number | `0` | -
| max | 最大值 | number | `100` | -
| steps | 步长 | number | `1` | -
| range | 是否开启区间滑块 | boolean | `false` | -
| tip-number | 是否显示数值 | boolean | `false` | -
| tip-formatter | 数值格式化 | (val) => string | `null` | -
| type | 显示类型(基本样式、块级样式) | `simple` `round` | `simple` | -
| disabled | 是否禁用 | boolean | `false` | -

### Event
|  名称   | 说明 | 类型 | 版本
|  ----  | ----  | ---- |  -
|  change | 拖拽结束和点击后触发 | (val: sliderValue) => void | -
|  drag-start | 拖拽开始 | - | -
|  drag-end | 拖拽结束 | (val: sliderValue) => void | -


### Slots

|  名称   | 说明  | 版本
|  ----  | ----  | -
|  leading | 领导内容 | -
|  trailing | 尾部内容 | -
