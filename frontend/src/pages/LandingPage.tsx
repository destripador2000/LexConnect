import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/landing/HeroSection';
import { FeatureCard } from '../components/landing/FeatureCard';
import { TestimonialCard } from '../components/landing/TestimonialCard';
import styles from '../styles/Landing.module.css';

const features = [
  {
    icon: 'handshake',
    title: 'Conectando Personas',
    description: 'Eliminamos las barreras entre ciudadanos y expertos legales, facilitando una comunicación directa y transparente desde el primer contacto.',
    linkText: 'Ver cómo funciona',
    href: '#',
    marginTopClass: '',
    iconBgClass: '',
    iconColorClass: ''
  },
  {
    icon: 'schedule',
    title: 'Ahorro de Tiempo',
    description: 'Filtra por especialidad, ubicación y disponibilidad en segundos. Encuentra al abogado adecuado sin tener que hacer docenas de llamadas.',
    linkText: 'Explorar filtros',
    href: '#',
    marginTopClass: 'md:mt-12',
    iconBgClass: '',
    iconColorClass: ''
  },
  {
    icon: 'gavel',
    title: 'Acceso a la Justicia',
    description: 'Creemos en un sistema legal accesible para todos. Promovemos tarifas claras y asesoramiento de alta calidad en toda Nicaragua.',
    linkText: 'Nuestra misión',
    href: '#',
    marginTopClass: 'md:mt-24',
    iconBgClass: '',
    iconColorClass: 'secondary'
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
    <div style={{ backgroundColor: 'var(--surface)', color: 'var(--text-main)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        <HeroSection />
        
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 4rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 500, color: 'var(--text-main)', marginBottom: '1rem' }}>Por qué elegir LexConnect</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>Diseñado para simplificar la búsqueda legal, brindando acceso a la justicia de manera rápida y segura.</p>
            </div>
            
            <div className={styles.featureGrid}>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--surface-container)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 500, color: 'var(--text-main)', marginBottom: '2rem' }}>
              ¿Cuál es la misión de LexConnect?
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.625 }}>
              Nuestra misión es democratizar el acceso a la justicia en Nicaragua. Brindamos una plataforma digital centralizada y transparente que conecta de manera rápida y segura a las personas con el profesional legal adecuado para sus necesidades, eliminando barreras y fomentando la confianza en el sistema.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 500, color: 'var(--text-main)' }}>Lo que dicen nuestros usuarios</h2>
            </div>
            <div className={styles.testimonialsGrid}>
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