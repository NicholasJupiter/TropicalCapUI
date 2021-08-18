<template>
  <teleport to="body">
    <transition name="fade">
      <div
        @touchmove.stop="touchmove"
        class="cap-overlay"
        v-if="visibled"
        @click="onClick"
        :class="classes"
        :style="{
          'background-color': bgColor
        }"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import '@/assets/styles/animation.scss';
export default defineComponent({
  name: 'cap-overlay',
  props: {
    visibled: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:visibled', 'click'],
  setup(props, ctx) {
    const classes = computed(() => {
      return {
        [props.customClass]: props.customClass
      };
    });
    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e);
      if (props.closeOnClick) {
        ctx.emit('update:visibled', false);
      }
    };
    const touchmove = (e: TouchEvent) => {
      if (props.lockScroll) e.preventDefault();
    };
    return {
      classes,
      onClick,
      touchmove
    };
  }
});
</script>
<style lang="scss" scoped>
@import './overlay.scss';
</style>
