<template>
  <div class="cap-cell">
    <slot name="before"></slot>
    <div class="cell-content" :style="{ 'margin-left': slots.before && '16px' }">
      <div class="cell__content">
        <slot></slot>
      </div>
      <div class="cell__after">
        <slot name="after"></slot>
      </div>
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
.cap-cell {
  display: flex;
  align-items: center;
  padding-left: 16px;
  min-height: 48px;
  
  .cell-content {
    display: flex;
    align-items: center;
    min-height: 48px;
    height: 100%;
    flex: 1;
    padding-right: 16px;
    border-bottom: 1px solid $color-font-color-0-1;

    .cell__content {
      font-size: 16px;
      line-height: 1.5;
    }
    .cell__after{
      margin-left: auto;
    }
  }
}
</style>
