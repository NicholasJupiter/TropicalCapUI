import { App } from 'vue';
import '@/assets/font/eva-icons.css';

const coms = import.meta.globEager('./**/index.ts');

function install(app: App) {
  Object.entries(coms).forEach(([key, value]) => {
    app.use(value.default);
  });
}

export default { install, version: '1.0.0-beta.1' };
