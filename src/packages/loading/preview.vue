<template>
  <button @click="service">显示loading</button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'loading-preview',
  props: {},
  emits: [],
  setup() {
    console.log(this);
    // 
    // const { ctx } = getCurrentInstance();
    console.log(getCurrentInstance());
    const service = () => {
      // ctx.$loading.service();
    };
    return { service };
  }
});
</script>
<style lang="scss" scoped></style>
