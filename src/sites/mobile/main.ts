import { createApp } from 'vue';
import App from './App.vue';
import Ju from '@/Ju';
import Route from './router';

const app = createApp(App);
app.use(Ju);
app.use(Route);
app.mount('#app');