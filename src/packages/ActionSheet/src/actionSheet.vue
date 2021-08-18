<template>
  <teleport to="body">
    
    <transition name="fain-bottom">
      <div class="cap-action-sheet" v-if="visibled" :class="classes">

      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'cap-actionSheet',
  props: {},
  emits: [],
  setup(props, ctx) {
    const classes = computed(()=>{
      return {
      }
    })
    return {classes};
  }
});
</script>
<style lang="scss" scoped>
@import './actionSheet.scss';
</style>
