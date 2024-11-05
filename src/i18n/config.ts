import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .use(Backend)
  .init({
    lng: localStorage.getItem("i18nextLng") || "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;