<template>
  <button class="cap-button" @click="onClick">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
      default: 'normal'
    },
    round: {
      type: Boolean,
      default: false
    },
    preIcon: {
      type: String,
      default: ''
    },
    nextIcon: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    console.log(ctx);
    const onClick = (event: MouseEvent) => {
      console.log(1);

      ctx.emit('click', event);
    };

    // const classes = computed(() => {
    //   [this.name + ``];
    // });
    return { onClick };
  }
});
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
