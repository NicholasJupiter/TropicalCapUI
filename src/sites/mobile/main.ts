import { createApp } from 'vue';
import App from './App.vue';
import CapUi from '@p/index';
import Route from './router';
import '@/util/touchEmulator.js';

const app = createApp(App);
app.use(CapUi);
app.use(Route);
app.mount('#app');