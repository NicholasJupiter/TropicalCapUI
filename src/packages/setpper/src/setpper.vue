<template>
  <div class="cap-setpper">
    <slot name="leading"></slot>
    <div class="cap-setpper__content"> </div>
    <slot name="trailing"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'cap-setpper',
  props: {
    type: {
      type: String,
      default: 'block'
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'update:minValue', 'update:maxValue', 'change'],
  setup(props, ctx) {
    const touchStart = () => {};
    const touchMove = () => {};
    const touchEnd = () => {};
    return { touchStart, touchMove, touchEnd };
  }
});
</script>
<style lang="scss" scoped>
@import './setpper.scss';
</style>
