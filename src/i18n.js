import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'This is description of React in English.',
          },
        },
      },
      de: {
        translation: {
          description: {
            part1: 'Das ist die Beschreibung auf Deutsch.',
          },
        },
      },
    },
  })
 
export default i18n