<template>
  <button @click="show">显示Toast</button>
  <button @click="customShow">插入DOM元素</button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, h } from 'vue';
export default defineComponent({
  name: 'cap-toast-preview',
  props: {},
  emits: [],
  setup(props, ctx) {
    const { proxy } = getCurrentInstance()!;
    const show = () => {
      proxy!.$toast.show({
        content: 'Toast content'
      });
    };
    const customShow = () => {
      proxy!.$toast.show({
        content: h('p', { style: 'color:red' }, '插入HTML代码')
      });
    };
    return { show, customShow };
  }
});
</script>
<style lang="scss" scoped></style>
