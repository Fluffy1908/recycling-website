import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
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
    fallbackLng: "ru", //In case other languages fail
    detection: {
      order: ['cookie', 'htmlTag', 'path', 'localStorage', 'subdomain'], //Using language detection
      caches: ['cookie'],
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
