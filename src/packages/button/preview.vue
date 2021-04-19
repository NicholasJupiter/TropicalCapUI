<template>
  <h4>基本用法</h4>
  <cap-button>Button</cap-button>
  <h4>Size</h4>
  <cap-button size="large">Button</cap-button>
  <cap-button size="small">View <cap-icon icon="arrow-ios-downward" size="small"></cap-icon>
  </cap-button>
  <h4>Type</h4>
  <cap-button type="assistant">Button</cap-button>
  <cap-button type="secondary">Button</cap-button>
  <cap-button type="success" plain>Button</cap-button>
  <cap-button type="danger" plain>Button</cap-button>
  <h4>Disabled</h4>
  <cap-button disabled>Button</cap-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'cap-button-preview',
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped>
button {
  margin: 10px auto;
}
</style>
