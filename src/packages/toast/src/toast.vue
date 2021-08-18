<template>
  <teleport to="body">
    <transition name="fade">
      <div
        class="cap-toast"
        v-if="visibled"
        :style="{
          [options.location]: options.offset
        }"
        @click="handleClick"
      >
        <div class="cap-toast__content" ref="content"></div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import {
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  nextTick,
  reactive,
  ref,
  render
} from 'vue';
import { TToastOptions } from './types.d';
import '@/assets/styles/animation.scss';
export default defineComponent({
  name: 'cap-toast',
  props: {},
  emits: [],
  setup() {
    const instance = getCurrentInstance();
    const options = reactive<TToastOptions>({
      offset: '16px',
      location: 'bottom',
      duration: 2000,
      showClose: false
    });
    const timeout = ref(0);
    const visibled = ref(false);
    const content = ref(null);
    // 打开
    const show = (_options: TToastOptions) => {
      _clearTimeout();
      visibled.value = true;
      _options && Object.assign(options, _options);
      // 创建DOM
      nextTick(() => {
        if (options.content && content.value) {
          let vm = null;
          if (typeof options.content === 'object') {
            vm = createVNode(options.content);
          } else {
            vm = createVNode(h('span', { innerHTML: options.content }));
          }
          render(vm, content.value!);
        }
        close();
      });
    };
    // 关闭
    const close = () => {
      if (options.duration) {
        timeout.value = setTimeout(() => {
          visibled.value = false;
          _clearTimeout();
        }, options.duration);
      }
    };

    const _clearTimeout = () => {
      timeout.value && window.clearTimeout(timeout.value);
      timeout.value = 0;
    };

    const handleClick = () => {
      if (options?.clickFn) {
        options.clickFn(instance!);
      }
    };

    return { options, visibled, show, close, content, handleClick };
  }
});
</script>
<style lang="scss" scoped>
@import './toast.scss';
</style>
