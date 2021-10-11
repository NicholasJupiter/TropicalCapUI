<template>
  <i class="eva" :class="['eva-' + icon]" :style="style"></i>
</template>
<script lang="tsx">
export default { name: 'cap-icon' };
</script>
<script lang="tsx" setup>
import type { TSize } from '@/types/components';
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
  }
});

const style = reactive({
  fontSize: size[props.size as TSize] || props.size
});
</script>
<style lang="scss" scoped>
.eva {
  font-family: Eva-Icons;
}
</style>
