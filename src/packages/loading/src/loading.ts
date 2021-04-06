import { App, createVNode, defineComponent, render } from 'vue';
import Loading from './loading.vue';
import { TLoadingOptions } from './types';
const _loading = defineComponent(Loading);
let container: Element | null = null;


// _loading.close = () => {
//   container && container.remove();
// };

_loading.service = (options: TLoadingOptions = {}) => {
  container = document.createElement('div');
  const vm = createVNode(_loading, options);
  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
};

export default _loading;