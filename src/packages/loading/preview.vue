<template>
  <cap-button @click="service" size="small">显示loading</cap-button>
  <cap-button @click="custom" size="small">插入DOM元素</cap-button>
</template>
<script lang="tsx" setup>
import { getCurrentInstance, h } from 'vue';

const { proxy } = getCurrentInstance()!;

const service = () => {
  proxy!.$loading.service({
    content: 'loading...'
  });
  setTimeout(() => {
    close();
  }, 3000);

};
const custom = () => {
  proxy!.$loading.service({
    content: <div>jsx</div>,
    modal: false
  });
  setTimeout(() => {
    close();
  }, 3000);
};
const close = () => {
  proxy!.$loading.close();
};
</script>
<style lang="scss" scoped></style>
