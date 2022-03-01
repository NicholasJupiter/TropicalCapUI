<template>
  <teleport to="body">
    <transition name="fain-bottom">
      <div class="cap-action-sheet" v-if="visibled" :class="classes"> </div>
    </transition>
  </teleport>
</template>

<script lang="tsx">
const name = 'cap-action-sheet';
export default { name };
</script>
<script lang="tsx" setup>
import { computed } from 'vue';
const classes = computed(() => {
  return {};
});
</script>
<style lang="scss" scoped>
@import './actionSheet.scss';
</style>
