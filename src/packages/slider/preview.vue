<template>
  <cap-slider v-model="sliderValue"></cap-slider>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cap-slider-preview',
  props: {},
  emits: [],
  setup(props, ctx) {
    const sliderValue = ref(0);
    return { sliderValue };
  }
});
</script>
<style lang="scss" scoped></style>
