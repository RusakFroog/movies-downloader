import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './routes';
import i18n from '../i18n/translate';
import './utils/index';

const pinia = createPinia();
const app = i18n(createApp(App));

app.use(pinia);
app.use(router);
app.mount('#app');