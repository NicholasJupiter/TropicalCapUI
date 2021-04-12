<template>
  <aside class="aside">
    <template v-for="(nav, name) in navs" :key="name">
      <router-link class="slide-item" :to="name"> {{ firstUpCase(name) }} </router-link>
    </template>
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
    const navs = reactive<{}>(getComs());

    const firstUpCase = (name: string) =>
      name[0].toUpperCase() + name.substring(1);

    return {
      navs,
      firstUpCase
    };
  }
});
</script>
<style lang="scss" scoped>
aside {
  max-width: 220px;
  min-width: 120px;
  width: 220px;
  height: 100%;
  padding: 85px 0 75px;
  background-color: #fff;
  border-right: 1px solid #f1f4f8;
  box-shadow: 0 8px 12px #ebedf0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  // padding-top: 60px;

  > a {
    display: block;
    padding: 10px 0 10px 30px;
    text-decoration: none;
    color: #555;
    &:hover {
      color: #111;
    }
  }
}
</style>
