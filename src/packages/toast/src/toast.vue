<template>
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
import { TToastOptions } from './types';
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
            vm = createVNode(h('span', options.content));
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
.cap-toast {
  width: calc(100% - 32px);
  height: 56px;
  // padding: 0 16px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  > .cap-toast__content {
    width: 100%;
    background-color: $color-page-mask-000;
    box-shadow: 0px 8px 32px 0px rgba($color: #000000, $alpha: 0.2);
    padding: 16px;
    overflow: hidden;
    font-size: 14px;
    color: white;
    border-radius: 6px;
  }
}
</style>
