import React from 'react';
import ReactDOM from 'react-dom/client';
import global_en from "./translations/en/global.json";
import global_ru from "./translations/ru/global.json";
import global_ua from "./translations/ua/global.json"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

import './index.css';
import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        global: global_en,
      },
      ru: {
        global: global_ru,
      },
      ua: {
        global: global_ua
      }
    },
    fallbackLng: "ua", //In case other languages fail
    detection: {
      order: [], //Using language detection
      caches: ['cookie'],
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
