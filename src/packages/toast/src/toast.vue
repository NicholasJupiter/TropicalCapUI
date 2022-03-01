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
        <div class="cap-toast__content" ref="contentRef"></div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="tsx">
const name = 'cap-toast';
export default { name };
</script>
<script lang="tsx" name="cap-toast" setup>
import {
  createVNode,
  getCurrentInstance,
  h,
  nextTick,
  reactive,
  ref,
  render
} from 'vue';
import { VNode } from 'vue';
import { TToastOptions } from './types.d';
import '@/assets/styles/animation.scss';

const instance = getCurrentInstance();
const options = reactive<TToastOptions>({
  offset: '16px',
  location: 'bottom',
  duration: 2000,
  showClose: false
});
let timeout = 0;
const visibled = ref(false);
const contentRef = ref(null);

// 打开
const show = (_options: TToastOptions | string | VNode | JSX.Element) => {
  _clearTimeout();
  visibled.value = true;
  options?.showFn && options.showFn(instance!);
  if (typeof _options === 'object') {
    // vnode || jsx
    if ((_options as VNode).type) {
      renderContext(_options as VNode);
    } else {
      // options
      Object.assign(options, _options);
      renderContext(options.content as string);
    }
  } else {
    // content
    renderContext(_options);
  }
  timeout = setTimeout(() => {
    close();
  }, options.duration);
};
/**
 * 渲染内容
 */
const renderContext = (content: string | VNode | JSX.Element) => {
  nextTick(() => {
    // 创建DOM
    if (content && contentRef.value) {
      let vm = null;
      if (typeof content === 'object') {
        vm = createVNode(content);
      } else {
        vm = createVNode(<span innerHTML={content}></span>);
      }
      render(vm, contentRef.value!);
    }
  });
};

// 关闭
const close = () => {
  visibled.value = false;
  _clearTimeout();
  options?.closeFn && options.closeFn(instance!);
};
// 清楚定时器
const _clearTimeout = () => {
  timeout && window.clearTimeout(timeout);
  timeout = 0;
};
// 处理点击事件
const handleClick = () => {
  options?.clickFn && options.clickFn(instance!);
};
</script>
<style lang="scss" scoped>
@import './toast.scss';
</style>
