import Card from './Card';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import type { WorkExperience } from '../types';
import React from 'react';

export default function WorkExperienceSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const workExperienceItems = t('workExperience', {
    returnObjects: true,
  }) as WorkExperience[];

  return (
    <div
      id={t('sections.workExperience') ?? ''}
      className={`mt-5 motion-safe:transition-all motion-safe:duration-1000 ${
        inView
          ? 'opacity-100 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
      ref={ref}
    >
      <Card>
        <div className="section-header">
          {t('experience')}
        </div>
        <div>
          {workExperienceItems.map((workExperienceItem) => (
            <div
              className="work-experience-item"
              key={workExperienceItem.dateRange}
            >
              <img
                src={workExperienceItem.imageUrl}
                alt={workExperienceItem.imageAlt}
                className="work-experience-logo"
              />
              <div className="work-experience-content">
                <div className="work-experience-company">
                  {workExperienceItem.company}
                </div>
                <div className="work-experience-title">
                  {workExperienceItem.jobTitle}
                </div>
                <div className="work-experience-meta">
                  {workExperienceItem.dateRange} • {workExperienceItem.location}
                </div>
                <ul className="work-experience-list">
                  {workExperienceItem.notableAccomplishments.map(
                    (accomplishment) => (
                      <li key={accomplishment}>{accomplishment}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
