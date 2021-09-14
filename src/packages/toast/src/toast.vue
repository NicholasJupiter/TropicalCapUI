<template>
  <teleport to="body">
    <transition name="fade">
      <div
        class="cap-toast"
        v-show="visibled"
        :style="{
          [options.location]: options.offset
        }"
        @click="handleClick"
      >
        <div class="cap-toast__content" ref="contentRef"></div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="tsx" name="cap-toast" setup>
import {
  createVNode,
  getCurrentInstance,
  h,
  nextTick,
  reactive,
  ref,
  render,
  toRefs
} from 'vue';
import type { VNode } from 'vue';
import type { TToastOptions } from './types.d';
import '@/assets/styles/animation.scss';

const instance = getCurrentInstance();
const options = reactive<TToastOptions>({
  offset: '16px',
  location: 'bottom',
  duration: 2000,
  showClose: false
});
const timeout = ref(0);
const visibled = ref(false);
const contentRef = ref(null);

// 打开
const show = (_options: TToastOptions | string | VNode | JSX.Element) => {
  _clearTimeout();
  visibled.value = true;
  let vm = null;
  if (typeof _options === 'object') {
    // jsx
    if ((_options as any).__v_isVNode) {
      vm = createVNode(_options);
    }
    console.log(_options);
  } else {
    options.content = _options;
  }
  console.log(_options);
  render(vm, contentRef.value!);
  setTimeout(()=>{
    close();
  }, options.duration);
  close();
  return;
  nextTick(() => {
    // 创建DOM
    if (options.content && contentRef.value) {
      let vm = null;
      if (typeof options.content === 'object') {
        vm = createVNode(options.content);
      } else {
        vm = createVNode(h('span', options.content));
      }
      render(vm, contentRef.value!);
    }
    close();
  });
};

const renderContext = () => {};

// 关闭
const close = () => {
  visibled.value = false;
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

</script>
<style lang="scss" scoped>
@import './toast.scss';
</style>
