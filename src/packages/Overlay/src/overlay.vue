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
<script lang="tsx">
const name = 'cap-overlay';
export default { name };
</script>
<script lang="tsx" setup>
import { computed, defineComponent } from 'vue';
import '@/assets/styles/animation.scss';
const props = defineProps({
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
});
const emit = defineEmits(['update:visibled', 'click']);
const classes = computed(() => {
  return {
    [props.customClass]: props.customClass
  };
});

const onClick = (e: MouseEvent) => {
  emit('click', e);
  if (props.closeOnClick) {
    emit('update:visibled', false);
  }
};
const touchmove = (e: TouchEvent) => {
  if (props.lockScroll) e.preventDefault();
};
</script>
<style lang="scss" scoped>
@import './overlay.scss';
</style>
