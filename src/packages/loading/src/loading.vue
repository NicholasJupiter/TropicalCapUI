<template>
  <div class="ju-loading">
    <img src="./loading.svg" />
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'ju-loading',
  props: {},
  emits: [],
  setup() {
    const { proxy } = getCurrentInstance()!;
    const close = () => {
      // proxy.$el.remove();
    };
    return { close };
  }
});
</script>
<style lang="scss" scoped>
.ju-loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
