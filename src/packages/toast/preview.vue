<template>
  <h4>基本用法</h4>
  <cap-button @click="show">显示Toast</cap-button>
  <h4>使用虚拟DOM</h4>
  <cap-button @click="customShow">插入DOM元素</cap-button>
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
        content: 'Toast content',
        clickFn: () => {
          alert('click toast');
        }
      });
    };
    const customShow = () => {
      proxy!.$toast.show({
        content: h('p', { style: 'color:red' }, '插入HTML代码'),
        clickFn: (toast) => {
          console.log(toast);
        }
      });
    };
    const onClick = () => {
      console.log('onclick toast');
    };
    return { show, customShow, onClick };
  }
});
</script>
<style lang="scss" scoped></style>
