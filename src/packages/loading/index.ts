import Loading from './src/loading.vue';
import { install } from '@/util/component';
import { createVNode, render } from 'vue';

export default install(Loading, (app, com) => {
  const vm = createVNode(com);
  render(vm, document.createElement('div'));
  com.cnname = '加载';
  app.config.globalProperties.$loading = vm.component!.proxy;
});
