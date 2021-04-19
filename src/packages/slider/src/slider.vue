<template>
  <div class="cap-slider" :class="classes">
    <slot name="leading"></slot>
    <div class="cap-slider__content" @click="onClick" ref="content">
      <div class="cap-slide__range" :style="rangeStyle">
        <div class="slider-move-btn-left" v-if="range" @click.stop></div>
        <div
          class="slider-move-btn-right"
          @touchstart.stop.prevent="touchStart"
          @touchmove.stop.prevent="touchMove"
          @touchend.stop.prevent="touchEnd"
          @click.stop
        ></div>
      </div>
    </div>
    <slot name="trailing"></slot>
  </div>
</template>
<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  reactive,
  ref
} from 'vue';
import { TRect } from './type';
import { useTouch } from '@/util/touch';
export default defineComponent({
  name: 'cap-slider',
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 0
    },
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
    range: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'update:minValue', 'update:maxValue', 'change'],
  setup(props, { emit }) {
    const name = 'cap-slider';
    const content = ref<HTMLElement>();
    const rect = ref<TRect>();
    const touch = useTouch();
    const scope = computed(() => Number(props.max) - Number(props.min));
    onMounted(() => {
      rect.value = content.value?.getBoundingClientRect()! as TRect;
    });

    const classes = computed(() => {
      return {
        [`${name}--${props.type}`]: true
      };
    });

    const emitValue = () => {};
    
    const onClick = (event: MouseEvent) => {
      if (props.disabled) {
        return;
      }
      const offset = event.clientX - rect.value!.left;
      const value = Math.round(
        props.min + (offset / rect.value!.width) * scope.value
      );
      emit('update:modelValue', value);
      calcWidth();
    };

    const touchStart = (event: TouchEvent) => {
      if (props.disabled) return;
      touch.start(event);
    };
    const touchMove = (event: TouchEvent) => {
      if (props.disabled) return;
      touch.move(event);

      calcWidth();
    };
    const touchEnd = () => {};
    // 计算left
    const calcLeft = () => {};
    // 计算宽度
    const calcWidth = () => {
      const { modelValue, min } = props;
      return `${((modelValue - min) * 100) / scope.value}%`;
    };
    const rangeStyle = computed(() => {
      return {
        width: calcWidth(),
        left: calcLeft()
        // 'background-color': props.activeColor,
      };
    });
    return {
      rangeStyle,
      touchStart,
      touchMove,
      touchEnd,
      onClick,
      classes,
      content
    };
  }
});
</script>
<style lang="scss" scoped>
@import './slider.scss';
</style>
