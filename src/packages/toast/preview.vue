<template>
  <h4>基本用法</h4>
  <cap-button @click="show" size="small">显示Toast</cap-button>
  <cap-button @click="htmlShow" size="small">插入HTML</cap-button>
  <h4>使用JSX/虚拟DOM</h4>
  <cap-cell @click="jsxShow">使用JSX</cap-cell>
  <h4>使用虚拟DOM</h4>
</template>
<script lang="tsx" setup>
import { getCurrentInstance, h } from 'vue';
const { proxy } = getCurrentInstance()!;

const show = () => {
  proxy!.$toast.show({
    content: 'Toast content',
    clickFn: () => {
      alert('click toast');
    }
  });
};

const vnodeShow = () => {
  proxy!.$toast.show(h('p', 'VNode'));
};

const jsxShow = () => {
  proxy!.$toast.show(<p style="color:red;">JSX</p>);
};

const onClick = () => {
  console.log('onclick toast');
};

const htmlShow = () => {
  proxy!.$toast.show({
    content: `<p style="color:red">我是html</p>`,
    clickFn: (toast) => {
      console.log(toast);
    }
  });
};
</script>
<style lang="scss" scoped></style>
