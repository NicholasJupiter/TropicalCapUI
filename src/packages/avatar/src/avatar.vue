<template>
  <div :style="style" class="cap-avatar" :class="classes">
    <img :src="src" v-if="src" />
  </div>
</template>
<script lang="tsx">
const name = 'cap-avatar';
export default { name };
</script>
<script lang="tsx" setup>
import { computed, PropType } from 'vue';
import { TAvatarSize } from './type';
const props = defineProps({
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
});

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
</script>
<style lang="scss" scoped>
@import './avatar.scss';
</style>
