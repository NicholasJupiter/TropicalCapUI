<template>
  <h4>基本用法</h4>
  <cap-cell @click="handleClick">Content</cap-cell>

  <h4>Icon</h4>
  <cap-cell @click="handleClick">
    <template #leading>
      <i class="eva eva-droplet" style="font-size: 24px"></i>
    </template>
    <span>Content</span>
    <template #guide-text>
      <span style="color: #666">View</span>
    </template>
    <template #trailing>
      <cap-icon icon="chevron-right-outline"></cap-icon>
    </template>
  </cap-cell>

  <cap-cell @click="handleClick">
    <template #leading>
      <i class="eva eva-droplet" style="font-size: 24px"></i>
    </template>
    <span>Content</span>
    <template #guide-text>
      <span style="color: #666">View</span>
    </template>
    <template #trailing>
      <i class="eva eva-chevron-right-outline"></i>
    </template>
  </cap-cell>
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
