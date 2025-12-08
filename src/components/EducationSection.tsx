import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import type { CertificationItem, EducationItem } from '../types';
import Card from './Card';
import React from 'react';

export default function EducationSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const educationItems = t('educationItems', {
    returnObjects: true,
  }) as EducationItem[];

  const certificationItems = t('certificationItems', {
    returnObjects: true,
  }) as CertificationItem[];

  return (
    <div
      id={t('sections.education') ?? ''}
      ref={ref}
      className={`mt-5 motion-safe:transition-all motion-safe:duration-1000 ${
        inView
          ? 'opacity-100 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
    >
      <Card>
        <div className="section-header">
          {t('education')}
        </div>

        <div className="subsection-header">
          {t('universityDegrees')}
        </div>

        {/* Custom Timeline */}
        <div className="custom-timeline">
          {educationItems.map((educationItem) => (
            <div key={educationItem.dateRange} className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <time className="timeline-time">{educationItem.dateRange}</time>
                <h3 className="timeline-title">{educationItem.title}</h3>
                <p className="timeline-body">
                  {educationItem.institution} <br />
                  {educationItem.location} <br />
                  {educationItem.accomplishment}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="subsection-header">
          {t('certifications')}
        </div>

        <div>
          {certificationItems.map((certItem) => (
            <div
              className="certification-item"
              key={certItem.title}
            >
              <div className="certification-badge">
                N2
              </div>
              <div>
                <div className="certification-title">
                  {certItem.title}
                </div>
                <div className="certification-date">
                  {certItem.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
