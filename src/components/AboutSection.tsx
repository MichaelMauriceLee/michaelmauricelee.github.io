import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    items: [
      { src: '/images/programming/react.jpg', label: 'React' },
      { src: '/images/programming/vue.jpg', label: 'Vue' },
    ],
  },
  {
    items: [
      { src: '/images/programming/azure-web-apps.jpg', label: 'Azure Web Apps' },
      { src: '/images/programming/azure-functions.jpg', label: 'Azure Functions' },
      { src: '/images/programming/cosmosdb.jpg', label: 'Cosmos DB' },
      { src: '/images/programming/azure-sql-database.jpg', label: 'Azure SQL Database' },
    ],
  },
  {
    items: [
      { src: '/images/programming/azure-devops.jpg', label: 'Azure DevOps' },
      { src: '/images/programming/github-actions.jpg', label: 'Github Actions' },
    ],
  },
  {
    items: [
      { src: '/images/programming/typescript.jpg', label: 'TypeScript' },
      { src: '/images/programming/csharp.jpg', label: 'C#' },
      { src: '/images/programming/java.jpg', label: 'Java' },
    ],
  },
];

export default function AboutSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  });

  const flavourText = t('flavourText')
    ?.split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div
      id={t('sections.about') ?? ''}
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-1000 ${inView
          ? 'opacity-100 blur-0 motion-safe:translate-x-0'
          : 'motion-safe:opacity-0 motion-safe:blur-sm motion-safe:-translate-x-full'
        }`}
    >
      <Card>
        <div className="section-header">
          {t('aboutMe')}
        </div>
        <p className="about-text">{flavourText}</p>

        {/* Custom Carousel */}
        <div className="carousel">
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={prevSlide}
            type="button"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="carousel-track">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`carousel-slide ${slideIndex === currentSlide ? 'active' : ''}`}
              >
                {slide.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="carousel-item">
                    <img src={item.src} alt={`${item.label} icon`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            className="carousel-btn carousel-btn-next"
            onClick={nextSlide}
            type="button"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
