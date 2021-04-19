<template>
  <i class="eva" :class="['eva-' + icon]" :style="style"></i>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import { TIconSize } from './type';
export default defineComponent({
  name: 'cap-icon',
  props: {
    size: {
      type: String as PropType<TIconSize | string>,
      default: 'medium'
    },
    icon: {
      type: String,
      require: true
    }
  },
  emits: [],
  setup(props, ctx) {
    const size = {
      medium: '24px',
      small: '16px',
      large: '32px'
    };

    const style = reactive({
      fontSize: size[props.size as TIconSize] || props.size
    });
    return { style };
  }
});
</script>
<style lang="scss">
.eva {
  font-family: Eva-Icons;
}
</style>
