<template>
  <div class="cap-dialog"> </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'cap-dialog',
  props: {},
  emits: [],
  setup(props, ctx) {
    const options = reactive<{}>({});
    return { options };
  }
});
</script>
<style lang="scss" scoped></style>
