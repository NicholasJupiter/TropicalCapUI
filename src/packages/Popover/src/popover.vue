<template>
  <!-- 内容 -->
  <span class="cap-popover__reference" @click="change" ref="reference">
    <slot ref="reference"></slot>
  </span>
  <!-- 弹窗 -->
  <teleport to="body">
    <div class="cap-popover" :class="popoverClasses" ref="popover">
      <transition name="zoom">
        <div v-show="!disabled && visibled" class="cap-popover__content">
          <div class="cap-popover__header">
            <span class="header__title" v-html="title"></span>
            <cap-icon icon="close" @click="change"></cap-icon>
          </div>
          <slot name="content"></slot>
          <div
            class="cap-popover__footer"
            :style="{ paddingTop: slots.footer && '16px' }"
          >
            <slot name="footer"></slot>
          </div>
          <cap-icon
            data-popper-arrow
            icon="arrow-down"
            class="cap-popover__arrow"
            size="large"
          ></cap-icon>
        </div>
      </transition>
    </div>
  </teleport>
</template>
<script lang="tsx">
const name = 'cap-popover';
export default { name };
</script>
<script lang="tsx" setup>
import {
  computed,
  nextTick,
  onMounted,
  PropType,
  ref,
  useSlots,
  watchEffect
} from 'vue';
import { TPopoverTheme } from './types';
import '@/assets/styles/animation.scss';
import { createPopper, Instance, Modifier, Placement } from '@popperjs/core';

const props = defineProps({
  visibled: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String as PropType<TPopoverTheme>,
    default: 'light',
    validator: (v: TPopoverTheme) => ['light', 'dark'].includes(v)
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'auto'
  },
  title: String,
  offset: {
    type: Array as PropType<number[]>,
    default: () => [0, 16],
    validator: (v: number[]) => v.length === 2
  },
  popoverClass: {
    type: String,
    default: ''
  },
  popoverModifiers: {
    type: Array as PropType<Modifier<any, any>[]>,
    default: () => []
  },
  disabled: Boolean
});

const visibled = ref(props.visibled);

const emit = defineEmits(['change', 'update:visibled']);
const slots = useSlots();
const reference = ref<HTMLElement>();
const popover = ref<HTMLElement>();
let popper: Instance | null = null;

watchEffect(() => {
  visibled.value = props.visibled;
});
watchEffect(() => {
  emit('update:visibled', visibled.value);
  emit('change', visibled.value);
  if (popper && visibled.value) {
    nextTick(() => {
      popper!.update();
    });
  }
});
onMounted(() => {
  popper = createPopper(reference.value!, popover.value!, {
    placement: props.placement,
    modifiers: [
      { name: 'arrow', options: {} },
      {
        name: 'flip',
        options: {
          // boundary: document.body,
          // flipVariations: false,
          padding: 8,
          altBoundary: true
          // fallbackPlacements: ['top', 'right', 'left', 'bottom']
        }
      },
      {
        name: 'preventOverflow',
        options: {
          // altBoundary: true,
          padding: 8
          // altAxis: true
        }
      },
      {
        name: 'offset',
        options: {
          offset: props.offset
        }
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: false
        }
      },
      ...props.popoverModifiers
    ]
  });
});

function change() {
  if (props.disabled) return;
  visibled.value = !visibled.value;
}

const popoverClasses = computed(() => {
  return {
    [`${name}--${props.theme}`]: true,
    [props.popoverClass]: true
  };
});
</script>
<style lang="scss" scoped>
@import './popover.scss';
</style>
<style lang="scss">
.cap-popover {
  h3 {
    font-size: 14px;
  }
}
</style>
