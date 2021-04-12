<template>
  <header class="header">
    <div class="header-content"></div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc-header',
  props: {},
  emits: [],
  setup(props, ctx) {
    return {};
  }
});
</script>
<style lang="scss" scoped>
header {
  height: 60px;
  box-shadow: 0 4px 12px 10px #ebedf0;
  width:100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: white;
  > .header-content {
    background-color: #1c1c1c;
    max-width: 1680px;
    height:100%;
    margin:0 auto;
  }
}
</style>
