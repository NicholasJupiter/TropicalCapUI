<template>
  <div class="cap-cell-preview">
    <p class="title">基本用法</p>
    <cap-cell @click="handleClick">Content</cap-cell>

    <cap-cell @click="handleClick">
      <template #before>
        <span>Label</span>
      </template>
      <span>Content</span>
    </cap-cell>

    <cap-cell @click="handleClick">
      <template #before>
        <span>Label</span>
      </template>
      <span>Content</span>
      <template #after>
        <span style="color:#666;">View</span>
      </template>
    </cap-cell>
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
<style lang="scss" scoped></style>
