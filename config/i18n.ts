import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_en from "translations/en.json";
import { languages } from "utils/CONSTANTS";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translation_en
      }
    },
    lng: languages.EN,
    fallbackLng: languages.EN,

    interpolation: {
      escapeValue: false
    }
});