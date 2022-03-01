<template>
  <h4>基本用法</h4>
  <cap-cell @click="handleClick">Content</cap-cell>

  <h4>Icon&图片</h4>
  <cap-cell @click="handleClick">
    <template #leading>
      <cap-icon icon="droplet" size="36px"></cap-icon>
    </template>
    <span>Content</span>
    <template #trailing>
      <cap-icon icon="chevron-right-outline" size="24px"></cap-icon>
    </template>
  </cap-cell>

  <cap-cell @click="handleClick">
    <template #leading>
      <cap-avatar
        src="https://s3-alpha.figma.com/profile/0355a457-cc67-44b8-b3a9-f3cfc12916fa"
      >
      </cap-avatar>
    </template>
    <span>Content</span>
    <template #trailing>
      <span style="color: #666">view</span>
    </template>
  </cap-cell>

  <h4>链接</h4>
  <cap-cell @click="handleClick" is-link>
    <span>跳转</span>
    <template #trailing>
      <span style="color: #666">view</span>
    </template>
  </cap-cell>

  <h4>表单</h4>
  <cap-cell @click="handleClick">
    <template #leading>
      <i class="eva eva-droplet" style="font-size: 24px"></i>
    </template>
    <span>Content</span>
    <template #trailing>
      <cap-button size="small" type="assistant" round>Action</cap-button>
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
