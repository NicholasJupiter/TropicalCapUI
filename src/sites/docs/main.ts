import { createApp } from 'vue';
import App from './App.vue';
import Ju from '../../Ju';
import router from './router';

// const modules = import.meta.glob('./packages/*/index.ts');
// const components: any[] = [];

// for (const path in modules) {
//   const { default: _ } = await modules[path]();
//   components.push(_);
// }

const app = createApp(App);
// app.config.globalProperties.packages = components;

app.use(Ju);
app.use(router);
app.mount('#app');
