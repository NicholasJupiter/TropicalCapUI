<template>
  <div class="cap-cell-preview">
    <p class="title">基本用法</p>
    <cap-cell @click="handleClick"></cap-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cap-cell-preview',
  setup() {
    const handleClick = () => {
      console.log('cell click');
    };
    return { handleClick };
  }
});
</script>
<style lang="scss" scoped>
</style>
