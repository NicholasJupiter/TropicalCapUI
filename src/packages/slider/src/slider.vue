<template>
  <div class="cap-slider" :class="classes">
    <slot name="leading"></slot>
    <div
      class="cap-slider__content"
      @click="onClick"
      ref="content"
      :style="{
        'margin-left': slots.leading && '16px',
        'margin-right': slots.trailing && '16px'
      }"
    >
      <div
        class="cap-slide__range"
        role="slider"
        :aria-valuemax="maxValue"
        :aria-valuemin="minValue"
        :aria-valuenow="modelValue"
        :aria-disabled="disabled"
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
        >
          <div class="drag__number" v-if="tipNumber">
            <span class="content">{{ tipFormatter(minValue) }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
            >
              <use xlink:href="#slider-arrow" />
            </svg>
          </div>
        </div>
        <div
          class="slider-move-btn-right"
          @touchstart.stop.prevent="touchStart($event, 'max')"
          @touchmove.stop.prevent="touchMove"
          @touchend.stop.prevent="touchEnd"
          @touchcancel.stop.prevent="touchEnd"
          @click.stop
        >
          <div class="drag__number" v-if="tipNumber">
            <span class="content">
              {{ tipFormatter(modelValue || maxValue) }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
            >
              <use xlink:href="#slider-arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <slot name="trailing"></slot>
    <svg style="display: none" xmlns="http://www.w3.org/2000/svg">
      <symbol id="slider-arrow">
        <path
          d="M7.27611 7.04478L13 0H0L5.72389 7.04478C6.12408 7.53733 6.87592 7.53733 7.27611 7.04478Z"
        />
      </symbol>
    </svg>
  </div>
</template>
<script lang="tsx">
const name = 'cap-slider';
export default { name };
</script>
<script lang="tsx" setup>
import { computed, onMounted, PropType, ref, useSlots } from 'vue';
import {
  TRect,
  TSliderState,
  TSliderType,
  TSliderValue,
  TTouchType
} from './types';
import { useTouch } from '@/util/touch';
import arrow from '@/assets/svg/arrow.svg';

const slots = useSlots();

const props = defineProps({
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
    type: String as PropType<TSliderType>,
    default: 'simple'
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  range: {
    type: Boolean,
    default: false
  },
  steps: {
    type: [Number, String],
    default: 1
  },
  tipNumber: {
    type: Boolean,
    default: false
  },
  tipFormatter: {
    type: Function,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits([
  'update:modelValue',
  'update:minValue',
  'update:maxValue',
  'change',
  'drag-start',
  'drag-end'
]);
const content = ref<HTMLElement>();
const rect = ref<TRect>();
const touch = useTouch();
let state: TSliderState = 'drag-start';

let startValue: number = 0;
let currValue: number | TSliderValue;
const startRangeValue = { min: 0, max: 0 };
let currTouchType: TTouchType = 'min';

onMounted(() => {
  rect.value = content.value?.getBoundingClientRect()! as TRect;
});

const scope = computed(() => Number(props.max) - Number(props.min));
const classes = computed(() => {
  return {
    [`${name}--${props.type}`]: true,
    [`${name}--disabled`]: props.disabled
  };
});

const emitValue = (value: number | TSliderValue) => {
  if (typeof value === 'number') {
    emit('update:modelValue', formatValue(value));
  } else if (props.range) {
    if (value.min > value.max) {
      emit('update:minValue', formatValue(value.max));
      emit('update:maxValue', formatValue(value.min));
      return;
    }
    emit('update:minValue', formatValue(value.min));
    emit('update:maxValue', formatValue(value.max));
  }
};

const onClick = (event: MouseEvent) => {
  if (props.disabled) return;
  state = 'click';
  let value = event.clientX - rect.value!.left;
  value = +props.min + (value / rect.value!.width) * scope.value;
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
  emitChange();
};

const formatValue = (value: number) => {
  value = Math.max(+props.min, Math.min(value, +props.max));
  return Math.round(value / +props.steps) * +props.steps;
};

const touchStart = (event: TouchEvent, touchType: TTouchType) => {
  if (props.disabled) return;
  currTouchType = touchType;
  touch.start(event);
  state = 'drag-start';
  emit('drag-start');
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
  state = 'draging';
  const touchX = touch.touchX.value;
  const offset = (touchX / rect.value!.width) * scope.value;
  if (props.range) {
    (currValue as TSliderValue)[currTouchType] =
      startRangeValue[currTouchType] + offset;
  } else {
    currValue = startValue + offset;
  }
  emitValue(currValue);
};

const touchEnd = () => {
  state = 'drag-end';
  emitChange();
  emit('drag-end');
};

const emitChange = () => {
  emit(
    'change',
    props.range
      ? { min: props.minValue, max: props.maxValue }
      : props.modelValue
  );
};
const rangeStyle = computed(() => {
  const calcWidth = () => {
    if (props.range) {
      return `${((props.maxValue - props.minValue) * 100) / scope.value}%`;
    }
    return `${((props.modelValue - +props.min) * 100) / scope.value}%`;
  };
  const calcLeft = () => {
    const value = ((props.minValue - +props.min) * 100) / scope.value;
    if (props.range) {
      return `${Math.max(value, 0)}%`;
    }
    return '0';
  };
  return {
    width: calcWidth(),
    left: calcLeft(),
    transition: state === 'click' ? '.2s width,.2s left' : ''
  };
});

const tipFormatter = (value: number) => {
  return props?.tipFormatter?.(value) || value;
};
</script>
<style lang="scss" scoped>
@import './slider.scss';
</style>
