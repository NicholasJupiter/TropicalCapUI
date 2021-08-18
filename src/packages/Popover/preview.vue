<template>
  <h4>基本用法</h4>
  <cap-popover title="New feature!" type="white" placement="top-end">
    <template #content>
      <p style="font-size: 12px; line-height: 20px">
        This is a handy template you can use for your apps (as a an onboarding
        tip feature for instance). Feel free to resize it
      </p>
    </template>
    <template #footer>
      <cap-button size="small" type="assistant" round plain> Skip </cap-button>
      <cap-button size="small" type="assistant" round> Next </cap-button>
    </template>
    <cap-button size="small">top</cap-button>
  </cap-popover>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cap-popover-preview',
  setup() {
    const pinValue = ref('');
    return { pinValue };
  }
});
</script>
<style lang="scss" scoped></style>
