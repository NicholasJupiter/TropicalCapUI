<template>
  <div id="preview-mobile">
    <iframe src="preview.html" frameborder="0"></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc-content',
  props: {},
  emits: [],
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped>
#preview-mobile {
  height: 667px;
  width: 375px;
  position: fixed;
  right: 30px;
  top: 100px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: #ebedf0 0 4px 12px;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
