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

<style lang="scss" scope>
.docs {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f0f3f6;
  header {
    width: 100%;
    height: 60px;
  }
  > main {
    flex: 1;
    display: flex;
    width: 100%;
  }
}
</style>
