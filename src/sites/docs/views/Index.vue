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
import DocAside from 'docs/components/layout/Aside.vue';
import DocContent from 'docs/components/layout/Content.vue';
import DocHeader from 'docs/components/layout/Header.vue';

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
<style lang="scss" scoped></style>
