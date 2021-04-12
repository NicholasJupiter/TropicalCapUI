<template>
  <div
    class="ju-loading"
    v-if="visibled"
    :style="[options.mask ? `background-color: rgba(0,0,0,0.5)` : '']"
    ref="loading"
  >
    <svg
      :width="options.size"
      :height="options.size"
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.8 24 4.8C13.3961 4.8 4.8 13.3961 4.8 24Z"
        fill="transparent"
      />
      <path
        d="M24 2.4C24 1.07452 25.0772 -0.0124306 26.396 0.119899C29.3527 0.416558 32.2358 1.2605 34.8958 2.61584C38.2704 4.33531 41.1902 6.82904 43.4164 9.89315C45.6426 12.9573 47.112 16.5048 47.7045 20.2456C48.297 23.9864 47.9957 27.8143 46.8254 31.4164C45.655 35.0185 43.6487 38.2924 40.9706 40.9706C38.2924 43.6487 35.0185 45.655 31.4164 46.8254C27.8143 47.9957 23.9864 48.297 20.2456 47.7045C17.2969 47.2375 14.4684 46.2256 11.9021 44.7278C10.7573 44.0596 10.5247 42.5471 11.3038 41.4748C12.0829 40.4024 13.5781 40.1796 14.7392 40.819C16.6799 41.8876 18.7964 42.6152 20.9965 42.9636C23.9891 43.4376 27.0515 43.1966 29.9331 42.2603C32.8148 41.324 35.4339 39.719 37.5765 37.5764C39.719 35.4339 41.324 32.8148 42.2603 29.9331C43.1966 27.0515 43.4376 23.9891 42.9636 20.9965C42.4896 18.0038 41.3141 15.1658 39.5331 12.7145C37.7522 10.2632 35.4163 8.26825 32.7166 6.89267C30.7319 5.88141 28.5919 5.22602 26.3938 4.94981C25.0786 4.78455 24 3.72548 24 2.4Z"
        fill="url(#paint0_radial)"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30 3) rotate(101.889) scale(38.833)"
        >
          <stop :stop-color="options.color" />
          <stop offset="1" :stop-color="options.color" stop-opacity="0" />
        </radialGradient>
      </defs>
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="1.5s"
        type="rotate"
        from="360"
        to="0"
        repeatCount="indefinite"
      ></animateTransform>
    </svg>
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
import { TLoadingOptions } from './types';
export default defineComponent({
  name: 'ju-loading',
  props: {
    mask: {
      type: Boolean,
      default: true
    }
  },
  emits: [],
  setup() {
    const visibled = ref(false);
    const loading = ref(null);
    const options = reactive<TLoadingOptions>({
      mask: true,
      size: 48,
      color: '#6481DC'
    });
    const service = (_options?: TLoadingOptions) => {
      visibled.value = true;
      _options && Object.assign(options, _options);
      // 渲染内容
      nextTick(() => {
        options.content &&
          render(
            createVNode(
              h('div', {
                class: 'loading-content',
              }, options.content)
            ),
            loading.value!
          );
      });
    };

    const close = () => {
      visibled.value = false;
    };

    return { close, visibled, service, options, loading };
  }
});
</script>
<style lang="scss" scoped>
.ju-loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > :deep(.loading-content) {
    margin-top: 8px;
    font-size: 16px;
    display: block;
    line-height: 24px;
    color: #383b46;
  }
}
</style>
