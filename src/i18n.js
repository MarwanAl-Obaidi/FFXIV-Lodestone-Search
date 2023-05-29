import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';
import jpTranslations from './locales/jp.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    fr: {
      translation: frTranslations,
    },
    de: {
      translation: deTranslations,
    },
    jp: {
      translation: jpTranslations,
    },
  },
  lng: 'en', // Set the default language here
  fallbackLng: 'en', // Fallback language if translation is not available for the selected language
  interpolation: {
    escapeValue: false, // React handles escaping
  },
});

export default i18n;
