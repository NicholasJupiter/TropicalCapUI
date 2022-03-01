<template>
  <i class="eva" :class="['eva-' + icon]" :style="style"></i>
</template>
<script lang="tsx">
const name = 'cap-icon';
export default { name };
</script>
<script lang="tsx" setup>
import { TSize } from '@/types/components';
import { PropType, reactive } from 'vue';
const size = {
  medium: '24px',
  small: '16px',
  large: '32px'
};

const props = defineProps({
  size: {
    type: String as PropType<TSize | string>,
    default: 'medium'
  },
  icon: {
    type: String,
    require: true
  },
  color: {
    type: String
  }
});

const style = reactive({
  fontSize: size[props.size as TSize] || props.size,
  color: props.color
});
</script>
<style lang="scss" scoped>
.eva {
  font-family: Eva-Icons;
}
</style>
