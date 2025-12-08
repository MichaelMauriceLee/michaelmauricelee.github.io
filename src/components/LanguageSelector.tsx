import i18next from '../i18n/i18n';
import { useSyncExternalStore, useState, useRef, useEffect } from 'react';
import ISO6991 from 'iso-639-1';
import { defaultLocale, locales } from '../i18n/config';
import React from 'react';

function subscribeToLanguage(callback: () => void) {
  i18next.on('languageChanged', callback);
  return () => i18next.off('languageChanged', callback);
}

function getLanguage() {
  return i18next.language || defaultLocale;
}

function getLanguageUrl(lang: string): string {
  if (typeof window === 'undefined') {
    return defaultLocale !== lang ? `/${lang}` : '/';
  }
  return `${window.location.origin}${defaultLocale !== lang ? `/${lang}` : ''}`;
}

export default function LanguageSelector() {
  const supportedLanguages = locales;
  const currentLanguage = useSyncExternalStore(subscribeToLanguage, getLanguage, () => defaultLocale);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentNativeName = ISO6991.getNativeName(currentLanguage);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        type="button"
        className="language-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {currentNativeName}
        <svg 
          className={`language-selector-chevron ${isOpen ? 'open' : ''}`}
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      {isOpen && (
        <ul className="language-selector-dropdown" role="listbox">
          {supportedLanguages.map((lang: string) => {
            const nativeName = ISO6991.getNativeName(lang);
            const isSelected = lang === currentLanguage;
            
            return (
              <li key={lang}>
                <a
                  href={getLanguageUrl(lang)}
                  className={`language-selector-option ${isSelected ? 'selected' : ''}`}
                  role="option"
                  aria-selected={isSelected}
                >
                  {nativeName}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
