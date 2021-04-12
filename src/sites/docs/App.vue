<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {},
  components: {}
});
</script>

<style lang="scss">
body {
  background-color: #f0f3f6;
}
#app {
  // height: 100vh;
  margin: 0 auto;
}
</style>
