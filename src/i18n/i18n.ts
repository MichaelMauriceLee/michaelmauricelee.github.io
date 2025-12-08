import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLocale, locales, type Locale } from './config';

// Import translations
import enTranslation from '../locales/en/translation.json';
import jaTranslation from '../locales/ja/translation.json';

const resources = {
  en: { translation: enTranslation },
  ja: { translation: jaTranslation },
};

// Detect language from URL path
function getLanguageFromPath(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0] as Locale;
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  return defaultLocale;
}

// Only initialize once
if (!i18next.isInitialized) {
  const detectedLang = getLanguageFromPath();
  
  i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: detectedLang,
      fallbackLng: defaultLocale,
      supportedLngs: locales,
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18next;

