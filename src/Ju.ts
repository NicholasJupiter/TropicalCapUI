import { App } from 'vue';

const modules = import.meta.glob('./packages/*/index.ts');
const components: any[] = [];

for (const path in modules) {
  const { default: _ } = await modules[path]();
  components.push(_);
}

function install(Vue: App) {
  components.forEach((com) => {
    Vue.use(com);
  });
}

export default { install, version: '1.0.0-beta.1' };
