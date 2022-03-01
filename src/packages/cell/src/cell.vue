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
      <slot name="trailing"> </slot>
      <cap-icon icon="chevron-right-outline" v-if="props.isLink"></cap-icon>
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
</script>

<style lang="scss" scoped>
@import './cell.scss';
</style>
