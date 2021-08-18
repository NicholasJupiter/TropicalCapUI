<template>
  <div
    class="cap-pin"
    :class="{ disabled, ['cap-pin--' + type]: true }"
    @click="handleClick"
  >
    <input
      type="tel"
      class="real__input"
      :value="modelValue"
      @input="valueChange"
      @keydown="inputDirection"
      :maxlength="length"
      :disabled="disabled"
      ref="realInput"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div
      v-for="(val, i) in length"
      :key="i"
      class="value__input"
      :class="{ 'input--focus': isFocus && modelValue.length === i }"
    >
      <span :class="{ password, 'has--value': modelValue[i] }">
        {{ password || !modelValue[i] ? '&nbsp;' : modelValue[i] }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { TPinType } from './types';
import '@/assets/styles/animation.scss';
export default defineComponent({
  name: 'cap-pin',
  props: {
    modelValue: {
      type: String,
      require: true
    },
    length: {
      type: Number,
      default: 6,
      validator: (val: number) => val >= 4 && val <= 6
    },
    password: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<TPinType>,
      default: 'basic'
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, ctx) {
    const realInput = ref<HTMLInputElement>();
    const isFocus = ref(false);
    const onBlur = () => {
      isFocus.value = false;
    }

    const onFocus = () => {
      isFocus.value = true;
    }

    const handleClick = () => {
      realInput.value?.focus();
    };
    const valueChange = (e: InputEvent) => {
      const target = e.target as HTMLInputElement;
      const len = target.value.length;
      if (len > props.length) {
        target.value.slice(0, props.length);
      }
      ctx.emit('update:modelValue', target.value);
      ctx.emit('change', target.value);
    };

    return { valueChange, realInput, handleClick, onBlur, onFocus, isFocus };
  }
});
</script>
<style lang="scss" scoped>
@import './pin.scss';
</style>
