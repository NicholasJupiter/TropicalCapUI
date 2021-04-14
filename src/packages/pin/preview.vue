<template>
  <div class="cap-pin-preview">
    <p class="title">基本用法</p>
    <cap-pin v-model="pinValue"></cap-pin>
    <cap-pin v-model="pinValue" type="block"></cap-pin>
    <p class="title">自定义长度</p>
    <cap-pin v-model="pinValue" :length="4"></cap-pin>
    <p class="title">隐藏输入信息</p>
    <cap-pin v-model="pinValue" password></cap-pin>
    <cap-pin v-model="pinValue" password type="block" disabled></cap-pin>
  </div>
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
<style lang="scss" scoped>
</style>
