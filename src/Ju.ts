import { App } from 'vue';
import { getComs } from './util/package';

function install(app: App) {
  const coms = getComs();
  console.log(coms);
  
  for (const key in coms) {
    if (Object.prototype.hasOwnProperty.call(coms, key)) {
      app.use(coms[key]);
    }
  }
}

export default { install, version: '1.0.0-beta.1' };
