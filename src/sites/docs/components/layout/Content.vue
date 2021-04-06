<template>
  <div class="content">
    <router-view />
    <div id="preview-mobile">
      <iframe :src="previewUrl" frameborder="0"></iframe>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute
} from 'vue-router';
export default defineComponent({
  name: 'doc-content',
  props: {},
  emits: [],
  setup() {
    // 更新路由时 改变iframe的地址
    const previewUrl = ref('preview.html');
    const watchPreviewUrl = (router: RouteLocationNormalized) => {
      const { origin, pathname } = window.location;
      previewUrl.value = `${origin}${pathname.replace(
        'index.html',
        ''
      )}preview.html#${router.path}`;
    };
    onMounted(() => {
      watchPreviewUrl(useRoute());
    });
    onBeforeRouteUpdate((to) => {
      watchPreviewUrl(to);
    });
    return { previewUrl };
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
