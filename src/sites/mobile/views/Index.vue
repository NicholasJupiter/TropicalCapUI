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
<style lang="scss" scoped>
.preview-content {
  > :deep(div) {
    padding: 10px 10px;
    > p.title {
      margin: 16px 0;
      font-size: 16px;
    }
    > div + div {
      margin-top: 20px;
    }
  }
}
</style>
