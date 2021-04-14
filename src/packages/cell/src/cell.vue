<template>
  <div
    class="cap-cell"
    @click="emit('click')"
  >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import '@/assets/styles/animation.scss';
export default defineComponent({
  name: 'cap-cell',
  props: {
  },
  emits: [],
  setup(props, ctx) {
    
    return { };
  }
});
</script>
<style lang="scss" scoped>
.cap-cell {
}
</style>
