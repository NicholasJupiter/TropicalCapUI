<template>
  <h4>基本用法</h4>
  <cap-avatar
    src="https://s3-alpha.figma.com/profile/0355a457-cc67-44b8-b3a9-f3cfc12916fa"
    size="large"
  ></cap-avatar>
  <cap-avatar
    src="https://s3-alpha.figma.com/profile/0355a457-cc67-44b8-b3a9-f3cfc12916fa"
    round
    size="50px"
    style="margin-left:10px;"
  ></cap-avatar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'cap-icon-preview',
  props: {},
  emits: [],
  setup(props, ctx) {
    return {};
  }
});
</script>
<style lang="scss" scoped></style>
