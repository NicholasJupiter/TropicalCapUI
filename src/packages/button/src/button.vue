<template>
  <button class="cap-button" @click="onClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, reactive } from 'vue';
import { TButtonSize, TButtonType } from '../type';

export default defineComponent({
  name: 'cap-button',
  emits: ['click'],
  props: {
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
  },
  setup(props, ctx) {
    const name = 'cap-button-';
    const onClick = (event: MouseEvent) => {
      ctx.emit('click', event);
    };
    const classes = reactive({
      [name + props.type]: true,
      [name + props.size]: true,
      plain: props.plain,
      round: props.round,
      disabled: props.disabled,

    });
    return { onClick };
  }
});
</script>
<style lang="scss" scoped>
.cap-button {
  .round {
    border-radius: 60px;
  }
}
</style>
