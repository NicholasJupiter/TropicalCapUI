<template>
  <div class="cap-cell" :class="classes">
    <slot name="leading"></slot>
    <div
      class="cell-content"
      :style="{ 'margin-left': slots.leading && '16px' }"
    >
      <div class="cell__content">
        <slot></slot>
      </div>
      <div
        class="cell__guide-text"
        :style="{ 'margin-right': slots.trailing && '8px' }"
      >
        <slot name="guide-text"></slot>
      </div>
      <slot name="trailing">
        <cap-icon icon="chevron-right-outline" v-if="props.isLink"></cap-icon>
      </slot>
    </div>
  </div>
</template>

<script lang="tsx">
const name = 'cap-cell';
export default { name };
</script>

<script lang="tsx" setup>
import { useSlots } from 'vue';
import '@/assets/styles/animation.scss';

const props = defineProps({
  isLink: { type: Boolean, default: false }
});

const slots = useSlots();
const classes = { [name + '--clickable']: props.isLink };
console.log(classes);
</script>

<style lang="scss" scoped>
@import './cell.scss';
</style>
