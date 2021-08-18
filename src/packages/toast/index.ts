import { install } from '@/util/component';
import { createVNode, render } from 'vue';
import Toast from './src/toast.vue';

export default install(Toast, (app, com) => {
  com.cnname = '吐司提示';
  const vm = createVNode(com);
  render(vm, document.createElement('div'));
  app.config.globalProperties.$toast = vm.component?.proxy;
})
