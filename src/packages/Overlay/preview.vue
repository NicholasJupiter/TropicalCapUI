<template>
  <cap-button @click="visibled = !visibled">打开蒙层</cap-button>
  <cap-overlay v-model:visibled="visibled"> 我是蒙层 </cap-overlay>
</template>
<script lang="tsx">
export default {
  name: 'cap-overlay-preview'
};
</script>
<script lang="tsx" setup>
import { ref } from 'vue';
const visibled = ref(false);
</script>
<style lang="scss" scoped></style>
