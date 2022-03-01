<template>
  <h4>基本用法</h4>
  <cap-button @click="show" size="small">显示Toast</cap-button>
  <cap-button @click="htmlShow" size="small">插入HTML</cap-button>
  <h4>使用JSX/虚拟DOM</h4>
  <cap-button size="small" @click="jsxShow">使用JSX</cap-button>
  <cap-button size="small" @click="vnodeShow">使用VNode</cap-button>
</template>
<script lang="tsx" setup>
import { getCurrentInstance, h } from 'vue';
const { proxy } = getCurrentInstance()!;

const show = () => {
  proxy!.$toast.show({
    content: 'Toast content'
  });
};

const vnodeShow = () => {
  proxy!.$toast.show(h('soan', 'VNode'));
};

const jsxShow = () => {
  proxy!.$toast.show(<p style="color:red;">JSX</p>);
};

const htmlShow = () => {
  proxy!.$toast.show(`<p style="color:red">插入HTML</p>`);
};
</script>
<style lang="scss" scoped></style>
