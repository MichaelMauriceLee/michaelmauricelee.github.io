import { useTranslation } from 'react-i18next';
import { Card, Carousel } from 'flowbite-react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      id={t('sections.about') ?? ''}
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-1000 ${
        inView
          ? 'opacity-1 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
      }`}
    >
      <Card>
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          {t('aboutMe')}
        </div>
        <p>{t('flavourText')}</p>
        <Carousel className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-slate-500 p-2 rounded text-white">
          <div className="flex h-full items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <img src="/images/programming/react.jpg" alt="React icon" />
              React
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/programming/vue.jpg" alt="Vue icon" />
              Vue
            </div>
          </div>
          <div className="flex h-full items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <img
                src="/images/programming/azure-web-apps.jpg"
                alt="Azure Web Apps icon"
              />
              Azure Web Apps
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/programming/azure-functions.jpg"
                alt="Azure Functions icon"
              />
              Azure Functions
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/programming/cosmosdb.jpg"
                alt="Cosmos DB icon"
              />
              Cosmos DB
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/programming/azure-sql-database.jpg"
                alt="Azure SQL Database icon"
              />
              Azure SQL Database
            </div>
          </div>
          <div className="flex h-full items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <img
                src="/images/programming/azure-devops.jpg"
                alt="Azure DevOps icon"
              />
              Azure DevOps
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/programming/github-actions.jpg"
                alt="GitHub Actions icon"
              />
              Github Actions
            </div>
          </div>
          <div className="flex h-full items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <img
                src="/images/programming/typescript.jpg"
                alt="TypeScript icon"
              />
              TypeScript
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/programming/csharp.jpg" alt="C# icon" />
              C#
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/programming/java.jpg" alt="Java icon" />
              Java
            </div>
          </div>
        </Carousel>
      </Card>
    </div>
  );
};

export default AboutSection;
