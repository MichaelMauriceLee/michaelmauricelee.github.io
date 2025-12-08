import Card from './Card';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { selectedSideProject } from '../store';
import type { SideProject } from '../types';
import React from 'react';

export default function SideProjectsSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const sideProjects = t('sideProjects', {
    returnObjects: true,
  }) as SideProject[];

  return (
    <div
      id={t('sections.sideProjects') ?? ''}
      className={`mt-5 motion-safe:transition-all motion-safe:duration-1000 ${
        inView
          ? 'opacity-100 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
      ref={ref}
    >
      <Card>
        <div className="section-header">
          {t('projects')}
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {sideProjects.map((sideProject) => (
            <Card
              imgSrc={sideProject.cardInfo.imageUrl}
              imgAlt={sideProject.title}
              key={sideProject.title}
              onClick={() => selectedSideProject.set(sideProject)}
              variant="project"
            >
              <div className="project-card-title">
                {sideProject.title}
              </div>
              <p className="project-card-description">
                {sideProject.cardInfo.description}
              </p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
