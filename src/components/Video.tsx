import i18next from '../i18n/i18n';
import { defaultLocale } from '../i18n/config';
import React from 'react';

export default function Video() {
  return (
    <video
      className="absolute top-0 w-full h-full object-cover -z-10 blur-sm"
      id="title-card"
      loop
      autoPlay
      muted
    >
      <source
        src={
          i18next.language !== defaultLocale
            ? '../background.mp4'
            : 'background.mp4'
        }
        type="video/mp4"
      />
    </video>
  );
}
