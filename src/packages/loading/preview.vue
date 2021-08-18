<template>
  <cap-button @click="service" size="small">显示loading</cap-button>
  <cap-button @click="custom" size="small">插入DOM元素</cap-button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, h } from 'vue';
export default defineComponent({
  name: 'cap-loading-preview',
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
        modal: false
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
