import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import kz from "./locales/kz.json";

i18n
  .use(LanguageDetector) // 👈 detect language from localStorage/browser
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ru: { translation: ru }, kz: { translation: kz } },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // 👈 saves user choice
    },
  });

export default i18n;
