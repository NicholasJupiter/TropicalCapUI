<template>
  <h4>基本用法</h4>
  <cap-pin v-model="pinValue"></cap-pin>
  <cap-pin v-model="pinValue" type="block"></cap-pin>
  <h4>自定义长度</h4>
  <cap-pin v-model="pinValue" :length="4"></cap-pin>
  <h4>隐藏输入信息</h4>
  <cap-pin v-model="pinValue" password></cap-pin>
  <cap-pin v-model="pinValue" password type="block" disabled></cap-pin>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cap-pin-preview',
  setup() {
    const pinValue = ref('');
    return { pinValue };
  }
});
</script>
<style lang="scss" scoped></style>
