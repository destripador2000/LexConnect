import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/landing/HeroSection';
import { FeatureCard } from '../components/landing/FeatureCard';
import { TestimonialCard } from '../components/landing/TestimonialCard';
import layoutStyles from '../styles/Landing.module.css';
import pageStyles from '../styles/LandingPage.module.css';

const features = [
  {
    icon: 'handshake',
    title: 'Conectando Personas',
    description: 'Eliminamos las barreras entre ciudadanos y expertos legales, facilitando una comunicación directa y transparente desde el primer contacto.',
    marginTopClass: '',
  },
  {
    icon: 'schedule',
    title: 'Ahorro de Tiempo',
    description: 'Filtra por especialidad, ubicación y disponibilidad en segundos. Encuentra al abogado adecuado sin tener que hacer docenas de llamadas.',
    marginTopClass: 'md:mt-12',
  },
  {
    icon: 'gavel',
    title: 'Acceso a la Justicia',
    description: 'Creemos en un sistema legal accesible para todos. Promovemos tarifas claras y asesoramiento de alta calidad en toda Nicaragua.',
    marginTopClass: 'md:mt-24',
  }
];

const testimonials = [
  { content: "Encontré a un abogado corporativo en menos de 24 horas. El proceso fue increíblemente sencillo y transparente.", author: "Carlos M." },
  { content: "Excelente directorio. Los perfiles verificados me dieron la confianza que necesitaba para mi caso familiar.", author: "Ana L." },
  { content: "Pude comparar diferentes profesionales y elegir el que mejor se adaptaba a mi presupuesto. Muy recomendado.", author: "Roberto G." },
  { content: "La plataforma es muy fácil de usar. Encontré la asesoría legal que necesitaba rápido y sin complicaciones.", author: "Elena S." }
];

export const LandingPage: React.FC = () => {
  return (
    <div className={pageStyles.pageContainer}>
      <Header />
      
      <main className={layoutStyles.mainContent}>
        <HeroSection />
        
        <section className={layoutStyles.section}>
          <div className={layoutStyles.sectionInner}>
            <div className={layoutStyles.sectionCenter}>
              <h2 className={layoutStyles.sectionTitle}>¿Por qué elegir LexConnect?</h2>
              <p className={layoutStyles.sectionSubtitle}>Diseñado para simplificar la búsqueda legal, brindando acceso a la justicia de manera rápida y segura.</p>
            </div>
            
            <div className={layoutStyles.featureGrid}>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className={layoutStyles.missionSection}>
          <div className={layoutStyles.missionContainer}>
            <h2 className={layoutStyles.missionTitle}>
              ¿Cuál es la misión de LexConnect?
            </h2>
            <p className={layoutStyles.missionText}>
              Nuestra misión es democratizar el acceso a la justicia en Nicaragua. Brindamos una plataforma digital centralizada y transparente que conecta de manera rápida y segura a las personas con el profesional legal adecuado para sus necesidades, eliminando barreras y fomentando la confianza en el sistema.
            </p>
          </div>
        </section>

        <section className={layoutStyles.section}>
          <div className={layoutStyles.sectionInner}>
            <div className={layoutStyles.sectionCenter}>
              <h2 className={layoutStyles.sectionTitle}>Lo que dicen nuestros usuarios</h2>
            </div>
            <div className={layoutStyles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
