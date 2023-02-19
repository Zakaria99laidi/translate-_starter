import { getLocales } from "expo-localization";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import arabic from "./arabic.json";
import english from "./english.json";
import french from "./french.json";
import spanish from "./spanish.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: english,
    fr: french,
    ar: arabic,
    es: spanish,
  },
  lng: getLocales()[0].languageCode,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
