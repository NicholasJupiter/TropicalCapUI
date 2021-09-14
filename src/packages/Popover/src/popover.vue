<template>
  <teleport to="body">
    <transition name="zoom">
      <div
        class="cap-popover"
        :class="classes"
        v-show="!disabled && showPopover"
        :style="popoverStyle"
        ref="popover"
      >
        <div class="cap-popover__header">
          <span class="header__title" v-html="title"></span>
          <cap-icon icon="close" @click="showPopover = false"></cap-icon>
        </div>
        <slot name="content"></slot>
        <div
          class="cap-popover__footer"
          :style="{ paddingTop: slots.footer && '16px' }"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </teleport>
  <span
    class="cap-popover__reference"
    @click="showPopover = !showPopover"
    ref="reference"
  >
    <slot></slot>
  </span>
</template>
<script lang="ts" name="cap-popover">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  reactive,
  ref,
  watch
} from 'vue';
import { TPlacement, TPopoverType } from './types';
import { updatePopper } from '@/util/popper';
import '@/assets/styles/animation.scss';

export default defineComponent({
  name: 'cap-popover',
  props: {
    type: {
      type: String as PropType<TPopoverType>,
      default: 'black'
    },
    placement: {
      type: String as PropType<TPlacement>,
      default: 'top'
    },
    title: String,
    disabled: Boolean
  },
  emits: ['show', 'hide'],
  setup(props, { emit, slots }) {
    const name = 'cap-popover';
    const showPopover = ref(false);
    const reference = ref<HTMLElement>();
    const popover = ref<HTMLElement>();
    const popoverStyle = reactive({
      top: '50%',
      left: '50%',
      transformOrigin: 'top center'
    });

    onMounted(() => {
      Object.assign(
        popoverStyle,
        updatePopper(reference.value!, popover.value!, {
          placement: props.placement
        })
      );
      console.log(popoverStyle);
      
    });

    watch(showPopover, (val) => {
      if (!props.disabled) return;
      emit(val ? 'show' : 'hide');
    });

    const classes = computed(() => {
      return {
        [`${name}--${props.type}`]: true
      };
    });
    return { classes, showPopover, slots, popoverStyle, reference, popover };
  }
});
</script>
<style lang="scss" scoped>
@import './popover.scss';
</style>
