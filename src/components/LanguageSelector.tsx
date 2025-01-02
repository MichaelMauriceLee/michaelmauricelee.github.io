import i18next from 'i18next';
import type { ChangeEvent } from 'react';
import ISO6991 from 'iso-639-1';
import i18nextConfig from '../../astro-i18next.config.mjs';
import React from 'react';

export default function LanguageSelector() {
  const supportedLanguages = i18next.languages;
  const currentLanguage = i18next.language;

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { location } = window;
    const { target } = event;

    location.href = `${location.origin}${
      i18nextConfig.defaultLocale !== target.value ? `/${target.value}` : ''
    }`;
  };

  return (
    <select
      onChange={handleLocationChange}
      value={currentLanguage}
      className="hover:cursor-pointer"
    >
      {supportedLanguages.map((supportedLanguage: string) => {
        const nativeName = ISO6991.getNativeName(supportedLanguage);

        return (
          <option value={supportedLanguage} key={supportedLanguage}>
            {nativeName}
          </option>
        );
      })}
    </select>
  );
}
