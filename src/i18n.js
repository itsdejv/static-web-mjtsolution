import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../public/locales/en/translation.json";
import translationCS from "../public/locales/cs/translation.json";
import translationDE from "../public/locales/de/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  cs: {
    translation: translationCS,
  },
  de: {
    translation: translationDE,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
