<template>
  <div class="cap-slider" :class="classes">
    <slot name="leading"></slot>
    <div class="cap-slider__content" @click="onClick" ref="content">
      <div
        class="cap-slide__range"
        role="slider"
        :aria-valuemax="+maxValue"
        :aria-valuemin="minValue"
        :aria-valuenow="modelValue"
        aria-orientation="horizontal"
        :style="rangeStyle"
      >
        <div
          class="slider-move-btn-left"
          v-if="range"
          @touchstart.stop.prevent="touchStart($event, 'min')"
          @touchmove.stop.prevent="touchMove"
          @touchend.stop.prevent="touchEnd"
          @click.stop
        ></div>
        <div
          class="slider-move-btn-right"
          @touchstart.stop.prevent="touchStart($event, 'max')"
          @touchmove.stop.prevent="touchMove"
          @touchend.stop.prevent="touchEnd"
          @touchcancel.stop.prevent="touchEnd"
          @click.stop
        ></div>
      </div>
    </div>
    <slot name="trailing"></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import { TRect, TSliderValue, TTouchType } from './type';
import { useTouch } from '@/util/touch';
import { debounce } from '@/util/util';
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
    step: {
      type: Number,
      default: 1
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

    const emitValue = (value: number | TSliderValue) => {
      // value = formatValue(value);
      // if (props.range) {
      //   if (props.minValue > props.maxValue) {
      //   }
      //   emit(
      //     currTouchType === 0 ? 'update:minValue' : 'update:maxValue',
      //     value
      //   );
      //   return;
      // }
      if (typeof value === 'number') {
        emit('update:modelValue', formatValue(value));
      } else if (props.range) {
        emit('update:minValue', formatValue(value.min));
        emit('update:maxValue', formatValue(value.max));
      }
    };

    const onClick = (event: MouseEvent) => {
      if (props.disabled) {
        return;
      }
      let value = event.clientX - rect.value!.left;
      value = props.min + (value / rect.value!.width) * scope.value;
      if (!props.range) {
        emitValue(value);
      } else {
        const { maxValue, minValue } = props;
        if (value <= (minValue + maxValue) / 2) {
          emitValue({
            min: value,
            max: maxValue
          });
        } else {
          emitValue({
            min: minValue,
            max: value
          });
        }
      }
    };

    const formatValue = (value: number) => {
      value = Math.max(props.min, Math.min(value, props.max));
      return Math.round(value / props.step) * props.step;
    };
    let startValue: number = 0;
    let currValue:number | TSliderValue;
    const startRangeValue = { min: 0, max: 0 };
    let currTouchType: TTouchType = 'min';

    const touchStart = (event: TouchEvent, touchType: TTouchType) => {
      if (props.disabled) return;
      currTouchType = touchType;
      touch.start(event);
      if (props.range) {
        startRangeValue[currTouchType] = formatValue(
          props[currTouchType === 'min' ? 'minValue' : 'maxValue']
        );
        currValue = {
          min: props.minValue,
          max: props.maxValue
        };
      } else {
        currValue = props.modelValue;
        startValue = formatValue(props.modelValue);
      }
    };
    const touchMove = (event: TouchEvent) => {
      if (props.disabled) return;
      touch.move(event);
      const touchX = touch.touchX.value;
      const offset = (touchX / rect.value!.width) * scope.value;
      if (props.range) {
        currValue = startRangeValue[currTouchType] + offset;
      }else{
        currValue = startValue + offset
      }
      emitValue(currValue);
    };
    const touchEnd = () => {};

    const rangeStyle = computed(() => {
      const calcWidth = () => {
        if (props.range) {
          return `${((props.maxValue - props.minValue) * 100) / scope.value}%`;
        }
        return `${((props.modelValue - props.min) * 100) / scope.value}%`;
      };
      const calcLeft = () => {
        if (props.range) {
          return `${((props.minValue - props.min) * 100) / scope.value}%`;
        }
        return '0';
      };
      return {
        width: calcWidth(),
        left: calcLeft()
        // 'transition'
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
