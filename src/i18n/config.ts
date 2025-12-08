export const defaultLocale = 'en';
export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const languages: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
};





