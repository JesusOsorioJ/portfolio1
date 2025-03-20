import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importamos los archivos de traducción
import en from "./assets/locales/en.json";
import es from "./assets/locales/es.json";

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "en", // Si el idioma del usuario no está disponible, usa inglés
    interpolation: { escapeValue: false }, // Permite HTML en las traducciones
  });

export default i18n;
