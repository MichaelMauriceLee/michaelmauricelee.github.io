import { Card, Timeline } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import type { CertificationItem, EducationItem } from '../types';
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
          ? 'opacity-1 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
    >
      <Card>
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          {t('education')}
        </div>

        <div className="text-xl font-bold tracking-tight text-gray-500 italic">
          {t('universityDegrees')}
        </div>

        <Timeline>
          {educationItems.map((educationItem) => (
            <Timeline.Item key={educationItem.dateRange}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>{educationItem.dateRange}</Timeline.Time>
                <Timeline.Title>{educationItem.title}</Timeline.Title>
                <Timeline.Body>
                  {educationItem.institution} <br />
                  {educationItem.location} <br />
                  {educationItem.accomplishment}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>

        <div className="text-xl font-bold tracking-tight text-gray-500 italic">
          {t('certifications')}
        </div>

        <div>
          {certificationItems.map((certificationItems) => (
            <div
              className="flex flex-col md:flex-row mb-3"
              key={certificationItems.title}
            >
              <div className="flex-col">
                <div className="text-xl font-bold tracking-tight text-gray-900">
                  {certificationItems.title}
                </div>
                <div className="text-l text-gray-500">
                  {certificationItems.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
