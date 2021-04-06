<template>
  <button @click="service">显示loading</button>
  <button @click="close">关闭loading</button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'loading-preview',
  props: {},
  emits: [],
  setup() {
    const { proxy } = getCurrentInstance()!;
    const service = () => {
      proxy.$loading.service();
    };
    const close = () => {
      proxy.$loading.close();
    };
    return { service };
  }
});
</script>
<style lang="scss" scoped></style>
