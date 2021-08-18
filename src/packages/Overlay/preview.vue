<template>
  <cap-button @click="visibled = !visibled">打开蒙层</cap-button>
  <cap-overlay v-model:visibled="visibled"> 我是蒙层 </cap-overlay>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cap-overlay-preview',
  setup() {
    const visibled = ref(false);
    return { visibled };
  }
});
</script>
<style lang="scss" scoped></style>
