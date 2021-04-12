<template>
  <button @click="service">显示loading</button>
  <button @click="custom">插入HTML代码段</button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, h } from 'vue';
export default defineComponent({
  name: 'ju-loading-preview',
  props: {},
  emits: [],
  setup() {
    const { proxy } = getCurrentInstance()!;
    const service = () => {
      proxy!.$loading.service({
        content: 'loading...',
      });
      setTimeout(() => {
        close();
      }, 3000);
    };
    const custom = () => {
      proxy!.$loading.service({
        content: h('div', { style: 'color:red;' }, 'HTML代码段'),
        mask: false
      });
      setTimeout(() => {
        close();
      }, 3000);
    };
    const close = () => {
      proxy!.$loading.close();
    };
    return { service, close, custom };
  }
});
</script>
<style lang="scss" scoped></style>
