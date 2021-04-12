import { install } from '@/util/component';
import { createVNode, render } from 'vue';
import Toast from './src/toast.vue';

export default install(Toast, (app, com) => {
  const container = document.createElement('div');
  com.cnname = '吐司提示';
  const vm = createVNode(com);
  render(vm, container);
  document.body.appendChild(container.firstChild!);
  app.config.globalProperties.$toast = vm.component?.proxy;
})
