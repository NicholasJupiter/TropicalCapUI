import { App } from 'vue';
import Loading from 'pack/loading/index';
const coms = [Loading];

function install(app: App) {
  coms.forEach((com: any) => {
    app.use(com);
  });
}

export default { install, version: '1.0.0-beta.1' };
