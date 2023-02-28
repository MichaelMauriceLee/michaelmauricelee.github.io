import Card from './Card';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import type { WorkExperience } from '../types';

const WorkExperienceSection = () => {
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
          ? 'opacity-1 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
      ref={ref}
    >
      <Card>
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          {t('experience')}
        </div>
        <div>
          {workExperienceItems.map((workExperienceItem) => (
            <div
              className="flex flex-col md:flex-row mb-3"
              key={`${workExperienceItem.startDate} - ${workExperienceItem.endDate}`}
            >
              <img
                src={workExperienceItem.imageUrl}
                alt={workExperienceItem.imageAlt}
              />
              <div className="ml-8 flex-col">
                <div className="text-xl font-bold tracking-tight text-gray-900">
                  {workExperienceItem.company}
                </div>
                <div className="text-l text-gray-500">
                  {workExperienceItem.jobTitle}
                </div>
                <div className="text-gray-500">
                  {workExperienceItem.startDate} - {workExperienceItem.endDate}
                </div>
                <div className="text-gray-500">
                  {workExperienceItem.location}
                </div>
                <ul className="list-disc">
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
};

export default WorkExperienceSection;
