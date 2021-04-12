import Loading from './src/loading.vue';
import { install } from '@/util/component';
import { createVNode, render } from 'vue';

export default install(Loading, (app, com) => {
  const container = document.createElement('div');
  const vm = createVNode(com);
  render(vm, container);
  document.body.appendChild(container.firstChild!);
  com.cnname = '加载';
  app.config.globalProperties.$loading = vm.component!.proxy;
});
