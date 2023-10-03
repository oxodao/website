import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App.tsx'

import translations_en from './translations_en.json';
import translations_fr from './translations_fr.json';

import './assets/css/index.css'
import './assets/css/main_menu.css'
import './assets/css/colored.css'

export const IS_LOOKING_FOR_JOB = true;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources: {
        en: {
          translation: translations_en,
        },
        fr: {
          translation: translations_fr,
        },
      },
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      }
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
