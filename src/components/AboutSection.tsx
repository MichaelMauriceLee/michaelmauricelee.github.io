import { useTranslation } from 'react-i18next';
import { Carousel } from 'flowbite-react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import React from 'react';

export default function AboutSection() {
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
        <Carousel
          className="h-56 sm:h-64 xl:h-80 2xl:h-96"
          indicators={false}
          leftControl={<></>}
          rightControl={<></>}
        >
          <div className="flex h-full items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <img src="/images/programming/react.jpg" alt="React icon" />
              React
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/programming/vue.jpg" alt="Vue icon" />
              Vue
            </div>
            <div className="flex flex-col items-center">
              <svg
                width="200px"
                height="200px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#CC3300"
                  d="M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z"
                />
              </svg>
              Svelte
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
}
