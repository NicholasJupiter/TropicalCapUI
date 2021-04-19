<template>
  <div class="preview-content">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'mobile',
  props: {},
  emits: [],
  setup(props, ctx) {
    return {};
  }
});
</script>
<style lang="scss">
.preview-content {
  padding: 10px 10px;
  > h1,
  > h2,
  > h3,
  > h4 {
    margin: 16px 0;
  }
  > div + div {
    margin-top: 20px;
  }
}
</style>
