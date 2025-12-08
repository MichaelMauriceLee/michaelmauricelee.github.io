import { useStore } from '@nanostores/react';
import { useTranslation } from 'react-i18next';
import { selectedSideProject } from '../store';
import React, { useEffect } from 'react';

export default function Popup() {
  const $selectedSideProject = useStore(selectedSideProject);
  const { t } = useTranslation();
  const isOpen = $selectedSideProject !== null;

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        selectedSideProject.set(null);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    selectedSideProject.set(null);
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      selectedSideProject.set(null);
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Close modal"
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">{$selectedSideProject?.title}</h2>
          <button 
            className="modal-close"
            onClick={() => selectedSideProject.set(null)}
            aria-label="Close"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <img 
            src={$selectedSideProject?.modalInfo.imageUrl} 
            alt={$selectedSideProject?.title ?? ''} 
            className="modal-image"
          />
          <p className="modal-description">
            {$selectedSideProject?.modalInfo.description}
          </p>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          {$selectedSideProject?.webAppURL && (
            <a 
              href={$selectedSideProject.webAppURL}
              className="modal-btn modal-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('openApplication')}
            </a>
          )}
          <a 
            href={$selectedSideProject?.codeUrl}
            className="modal-btn modal-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('viewCode')}
          </a>
        </div>
      </div>
    </div>
  );
}
