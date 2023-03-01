import { useStore } from '@nanostores/react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { offset } from '../store';

const TitleCard = () => {
  const $offset = useStore(offset);
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      id="title-card"
      className={`absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 motion-safe:transition-all motion-safe:duration-700 border-2 rounded-lg backdrop-blur-3xl hover:text-blue-700 hover:border-blue-700 hover:bg-white ${
        inView
          ? 'opacity-1 blur-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:translate-y-full'
      }`}
      ref={ref}
    >
      <Link
        to={t('sections.about')}
        href={`#${t('sections.about')}`}
        spy
        hashSpy
        smooth
        isDynamic
        duration={500}
        offset={$offset}
      >
        <div className=" w-full m-auto px-4 md:p-10">
          <div className="text-left text-l md:text-xl">
            {t('softwareEngineer')}
          </div>
          <h1 className="text-center text-7xl md:text-9xl">Michael Lee</h1>
          <div className="text-right text-l md:text-xl">
            {t('webDevelopment')}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TitleCard;
