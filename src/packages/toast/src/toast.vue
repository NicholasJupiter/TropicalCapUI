<template>
  <div
    class="ju-toast"
    :class="classes"
    v-if="visibled"
    :style="{
      [options.location]: options.offset
    }"
    ref="toast"
  >
  </div>
</template>
<script lang="ts">
import {
  createVNode,
  defineComponent,
  h,
  nextTick,
  reactive,
  ref,
  render
} from 'vue';
import { TToastOptions } from './types';
import '@/assets/styles/animation.scss';
export default defineComponent({
  name: 'ju-toast',
  props: {},
  emits: [],
  setup() {
    const options = reactive<TToastOptions>({
      offset: '16px',
      location: 'bottom',
      duration: 2000,
      showClose: false
    });

    const visibled = ref(false);
    const toast = ref(null);
    const classes = reactive<{ [key: string]: boolean }>({});
    // 打开
    const show = (_options: TToastOptions) => {
      visibled.value = true;
      _options && Object.assign(options, _options);
      // 创建DOM
      nextTick(() => {
        setTimeout(() => {
          classes['fade-out'] = false;
        }, 3000);
        if (options.content && toast.value) {
          let vm = null;
          if (typeof options.content === 'object') {
            vm = createVNode(options.content);
          } else {
            vm = createVNode(h('span', options.content));
          }
          render(vm, toast.value!);
        }
        if (options.duration) {
          setTimeout(() => {
            close();
          }, options.duration);
        }
      });
    };
    // 关闭
    const close = () => {
      classes['fade-out'] = true;
      setTimeout(() => {
        visibled.value = false;
      }, 350);
    };

    return { options, visibled, show, close, toast, classes };
  }
});
</script>
<style lang="scss" scoped>
// @import '@/assets/styles/animation.scss';
.ju-toast {
  width: 343px;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: $color-page-mask-000;
  box-shadow: 0px 8px 32px 0px rgba($color: #000000, $alpha: 0.2);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  z-index: 100;
  font-size: 14px;
  color: white;
  opacity: 0;
  overflow: hidden;
  animation: fadeIn 0.3s ease-out forwards;
  &.fade-out {
    animation: fadeOut 0.3s ease-in forwards;
  }
}
</style>
