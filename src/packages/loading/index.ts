import Index from './src/loading';
import { install } from '@/util/component';

export default install(Index, (app, com) => {
  com.cnname = '加载';
  app.config.globalProperties.$loading = com;
});
