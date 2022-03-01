<template>
  <div id="nav">{{ title }}</div>
  <main id="mobile-content">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'mobile',
  components: {},
  setup() {
    const title = ref('JuUI');
    const route = useRoute();
    watch(
      () => route,
      () => {
        const { hash } = window!.top!.location;
        if (route.hash != hash) {
          title.value = route.name as string;
        } else {
          title.value = route.name as string;
        }
      },
      {
        immediate: true,
        deep: true
      }
    );
    return { title };
  }
});
</script>

<style lang="scss">
#app {
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  #nav {
    height: 60px;
    line-height: 60px;
    width: 100%;
    text-align: center;
    background: white;
    font-weight: bold;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
  }
  #mobile-content {
    flex: 1;
    width: 100%;
    overflow: auto;
  }
}
</style>
