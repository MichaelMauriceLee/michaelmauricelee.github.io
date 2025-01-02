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
          ? 'opacity-1 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
      ref={ref}
    >
      <Card>
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          {t('projects')}
        </div>
        <div className="grid md:grid-cols-4 gap-3 items-stretch">
          {sideProjects.map((sideProject) => (
            <Card
              imgSrc={sideProject.cardInfo.imageUrl}
              key={sideProject.title}
              onClick={() => selectedSideProject.set(sideProject)}
              className="cursor-pointer hover:outline hover:outline-blue-400"
            >
              <div className="text-2xl font-bold tracking-tight text-gray-900">
                {sideProject.title}
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {sideProject.cardInfo.description}
              </p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
