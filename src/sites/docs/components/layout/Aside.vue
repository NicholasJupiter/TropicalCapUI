<template>
  <aside>
    <div class="slide-item">
      <div v-for="(nav, index) in navs" :key="index">{{ nav.name }}</div>
    </div>
  </aside>
</template>
<script lang="ts">
import { getComs } from '@/util/package';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'doc-slide',
  props: {},
  emits: [],
  setup(_props, ctx) {
    const navs = reactive<any[]>([]);
    const modules = getComs();
    for (const path in modules) {
      if (modules[path]) {
        navs.push(modules[path]);
      }
    }
    console.log(navs);

    return {
      navs
    };
  }
});
</script>
<style lang="scss" scoped>
aside {
  max-width: 220px;
  width: 220px;
  height: 100%;
  padding: 25px 0 75px;
  background-color: #fff;
  border-right: 1px solid #f1f4f8;
  box-shadow: 0 8px 12px #ebedf0;
}
</style>
