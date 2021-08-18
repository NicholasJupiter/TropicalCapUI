<template>
  <div :style="style" class="cap-avatar" :class="classes">
    <img :src="src" v-if="src" />
  </div>
</template>
<script lang="ts" setup>
import { computed, defineComponent, PropType } from 'vue';
import { TAvatarSize } from './type';

export default defineComponent({
  name: 'cap-avatar',
  props: {
    size: {
      type: String as PropType<TAvatarSize | string>,
      default: 'medium'
    },
    src: {
      type: String,
      require: true
    },
    round: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    }
  },
  emits: [],
  setup(props, ctx) {
    const size = {
      medium: '36px',
      small: '24px',
      large: '72px'
    };

    const style = computed(() => ({
      width: size[props.size as TAvatarSize] || props.size,
      height: size[props.size as TAvatarSize] || props.size,
      backgroundColor: props.bgColor
    }));

    const classes = computed(() => ({
      round: props.round
    }));
    return { style, classes };
  }
});
</script>
<style lang="scss" scoped>
@import './avatar.scss';
</style>
