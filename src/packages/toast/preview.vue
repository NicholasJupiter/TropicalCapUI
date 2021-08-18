<template>
  <h4>基本用法</h4>
  <cap-button @click="show" size="small">显示Toast</cap-button>
  <cap-button @click="htmlShow" size="small">插入HTML</cap-button>
  <h4>使用虚拟DOM</h4>
  <cap-button @click="customShow" size="small">插入虚拟DOM</cap-button>
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
        content: h('p', { style: 'color:red' }, '插入虚拟dom'),
        clickFn: (toast) => {
          console.log(toast);
        }
      });
    };
    const onClick = () => {
      console.log('onclick toast');
    };
    const htmlShow = () =>{
      proxy!.$toast.show({
        content:`<p style="color:red">我是html</p>`,
        clickFn: (toast) => {
          console.log(toast);
        }
      });
    }
    return { show, customShow, onClick, htmlShow };
  }
});
</script>
<style lang="scss" scoped></style>
