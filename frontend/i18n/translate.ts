import i18next from 'i18next';
import i18nextVue from 'i18next-vue';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from "i18next-resources-to-backend";
import dayjs from 'dayjs';

import type { App } from "vue";

i18next
    .use(LanguageDetector)
    .use(resourcesToBackend((language: string) => import(`./locales/${language}.json`)))
    .init({
        fallbackLng: 'en',
        load: 'languageOnly',
        debug: !import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === 'development',

        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'subdomain', 'navigator', 'htmlTag', 'path'],
        },

        interpolation: {
            escapeValue: false,
        },
    });

i18next.on('languageChanged', (language: string) => dayjs.locale(language));

export default function(app: App): App {
    app.use(i18nextVue, { i18next });
    return app;
};
