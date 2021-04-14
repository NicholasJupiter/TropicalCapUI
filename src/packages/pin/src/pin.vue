<template>
  <div
    class="cap-pin"
    :class="{ disabled, ['cap-pin--' + type]: true }"
    @click="handleClick"
  >
    <input
      type="tel"
      class="real__input"
      @input="valueChange"
      @keydown="inputDirection"
      :maxlength="length"
      :disabled="disabled"
      ref="realInput"
    />
    <div
      v-for="(val, i) in length"
      :key="i"
      class="value__input"
      :class="{ 'input--focus': modelValue.length === i }"
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

    return { valueChange, realInput, handleClick };
  }
});
</script>
<style lang="scss" scoped>
.cap-pin {
  width: 100%;
  padding:8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  color: $color-font-color-1-0;
  &--basic {
    > div {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        border-radius: 60px;
        background-color: $color-font-color-0-1;
      }
      &.input--focus {
        &::after {
          background-color: $color-blue-6;
        }
        > span {
          &::before {
            content: '';
            display: inline-block;
            width: 2px;
            height: 24px;
            border-radius: 60px;
            @include position-center;
            background-color: $color-font-color-1-0;
            animation: cursor-blinks 1.5s infinite steps(1, start);
          }
        }
      }
    }
  }

  &.cap-pin--block {
    > div {
      border-radius: 6px;
      overflow: hidden;
      border: 2px transparent solid;
      > span {
        background-color: $color-background-background-light;
      }
      &.input--focus {
        border-color: $color-blue-6;
      }
    }
  }

  > .real__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;
  }
  > div {
    flex: 1;
    max-width: 48px;
    & + div {
      margin-left: 10px;
    }
    span {
      display: inline-block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      position: relative;
      &.password.has--value {
        &::after {
          content: '';
          @include position-center;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: $color-font-color-1-0;
        }
      }
    }
  }

  &.disabled {
    > div {
      span {
        &.password.has--value {
          &::after {
            background-color: $color-font-color-0-3;
          }
        }
      }
    }
  }
}
</style>
