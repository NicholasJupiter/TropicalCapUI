import { App } from 'vue';
// import * as eva from 'eva-icons';
import '@/assets/font/eva-icons.css';
import './util/touchEmulator.js';
import { getComs } from './util/package';

function install(app: App) {
  const coms = getComs();
  for (const key in coms) {
    if (Object.prototype.hasOwnProperty.call(coms, key)) {
      app.use(coms[key]);
    }
  }
}

export default { install, version: '1.0.0-beta.1' };
