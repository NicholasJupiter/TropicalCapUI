<template>
  <main class="docs">
    <doc-header></doc-header>
    <main>
      <doc-aside></doc-aside>
      <doc-content></doc-content>
    </main>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DocAside from '@docs/components/layout/Aside.vue';
import DocContent from '@docs/components/layout/Content.vue';
import DocHeader from '@docs/components/layout/Header.vue';

export default defineComponent({
  name: 'index',
  components: { DocAside, DocContent, DocHeader },
  props: {},
  emits: [],
  setup(props, ctx) {
    return {};
  }
});
</script>
<style lang="scss" scoped>
.docs {
  width: 100%;
  height: 100%;
  background-color: #f0f3f6;
  header {
    width: 100%;
    height: 60px;
  }
  > main {
    position: relative;
    flex: 1;
    display: flex;
    max-width: 1680px;
    margin: 0 auto;
    padding-top: 60px;
    width: 100%;
  }
}
</style>
