import { createApp } from 'vue';
import App from './App.vue';
import Ju from './Ju';
import btn from './packages/button/index';

const app = createApp(App);
app.use(Ju);
app.mount('#app');
