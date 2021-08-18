<template>
  <div class="cap-cell">
    <slot name="leading"></slot>
    <div class="cell-content" :style="{ 'margin-left': slots.leading && '16px' }">
      <div class="cell__content">
        <slot></slot>
      </div>
      <div class="cell__guide-text" :style="{ 'margin-right': slots.trailing && '8px' }">
        <slot name="guide-text"></slot>
      </div>
      <slot name="trailing"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import '@/assets/styles/animation.scss';
export default defineComponent({
  name: 'cap-cell',
  props: {},
  emits: [],
  setup(props, ctx) {
    return { slots: ctx.slots };
  }
});
</script>
<style lang="scss" scoped>
@import './cell.scss';
</style>
