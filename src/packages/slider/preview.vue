<template>
  <div class="slider-preview">
    <h4>基本用法</h4>
    <cap-slider v-model="sliderValue"></cap-slider>
    <cap-slider v-model="sliderValue" type="round"></cap-slider>

    <h4>区间滑块</h4>
    <cap-slider
      v-model:minValue="minValue"
      v-model:maxValue="maxValue"
      range
    ></cap-slider>

    <h4>数值提示</h4>
    <cap-slider
      v-model="sliderValue"
      style="margin-top: 40px"
      tip-number
    ></cap-slider>

    <cap-slider
      v-model:minValue="minValue"
      v-model:maxValue="maxValue"
      range
      style="margin-top: 60px"
      type="round"
      tip-number
    ></cap-slider>

    <cap-slider
      v-model="sliderValue"
      style="margin-top: 60px"
      :tip-formatter="(val) => val + '%'"
      tip-number
    ></cap-slider>

    <h4>设置步长</h4>
    <cap-slider
      v-model:minValue="minValue"
      v-model:maxValue="maxValue"
      :steps="20"
      range
    ></cap-slider>
    <cap-slider v-model="sliderValue" :steps="20"></cap-slider>

    <h4>设置最大最小值</h4>
    <cap-slider
      v-model:minValue="minValue"
      v-model:maxValue="maxValue"
      min="20"
      max="200"
      range
    ></cap-slider>

    <cap-slider v-model="sliderValue" min="20" max="200"></cap-slider>

    <h4>使用插槽</h4>
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

    <h4>禁用</h4>
    <cap-slider
      v-model:minValue="minValue"
      v-model:maxValue="maxValue"
      disabled
      range
    ></cap-slider>
    <cap-slider v-model="sliderValue" disabled></cap-slider>
    <cap-slider v-model="sliderValue" disabled type="round"></cap-slider>
    <p style="margin-top: 20px">
      sliderValue: {{ sliderValue }} <br />
      minValue: {{ minValue }}<br />
      maxValue: {{ maxValue }}
    </p>
  </div>
</template>
<script lang="tsx" setup>
import { defineComponent, ref } from 'vue';

const sliderValue = ref(0);
const minValue = ref(0);
const maxValue = ref(0);
</script>
<style lang="scss" scoped>
.cap-slider {
  margin-top: 20px;
}
</style>
<style lang="scss">
.slider-preview {
  padding-right: 20px;
}
</style>
