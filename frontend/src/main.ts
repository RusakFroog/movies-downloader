import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import i18n from '../i18n/translate';
import './utils/index';

const app = i18n(createApp(App));

app.use(router);
app.mount('#app');