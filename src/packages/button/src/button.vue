<template>
  <button
    class="cap-button"
    @click="onClick"
    :disabled="disabled"
    :class="classes"
  >
    <div class="cap-button__content">
      <slot></slot>
    </div>
  </button>
</template>
<script lang="tsx">
const name = 'cap-button';
export default { name };
</script>
<script lang="tsx" setup>
import { PropType, reactive } from 'vue';
import { TButtonSize, TButtonType } from './type';

const emit = defineEmits(['click']);

const props = defineProps({
  plain: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<TButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<TButtonSize>,
    default: 'medium'
  },
  round: {
    type: Boolean,
    default: false
  },
  preIcon: {
    type: String,
    default: ''
  },
  afterIcon: {
    type: String,
    default: ''
  }
});
const onClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event);
};
const classes = reactive({
  [`${name}--${props.type}`]: true,
  [`${name}--${props.size}`]: true,
  [`${name}--plain`]: props.plain,
  round: props.round,
  [`${name}--disabled`]: props.disabled
});
</script>
<style lang="scss" scoped>
@import './button.scss';
</style>
