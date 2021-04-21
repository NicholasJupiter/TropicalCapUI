<template>
  <h4>基本用法</h4>
  <cap-slider v-model="sliderValue"></cap-slider>
  <h4>区间</h4>
  <cap-slider
    v-model:minValue="minValue"
    v-model:maxValue="maxValue"
    range
  ></cap-slider>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cap-slider-preview',
  props: {},
  emits: [],
  setup(props, ctx) {
    const sliderValue = ref(0);
    const minValue = ref(0);
    const maxValue = ref(0);
    return { sliderValue, minValue, maxValue };
  }
});
</script>
<style lang="scss" scoped></style>
