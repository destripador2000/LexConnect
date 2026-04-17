import styles from './FeaturesCards.module.css';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

// Tipamos los datos para mantener el estándar estricto
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const featuresData: Feature[] = [
  {
    id: 'eficacia',
    title: 'Eficacia',
    description: 'Algoritmos de coincidencia de alta precisión que conectan su caso con el especialista exacto que necesita, sin demoras.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'confianza',
    title: 'Confianza',
    description: 'Cada perfil es verificado rigurosamente. Historial, credenciales y referencias comprobadas para su tranquilidad total.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'red',
    title: 'Red Global',
    description: 'Acceso sin precedentes a una red interconectada de mentes legales brillantes en múltiples especialidades y jurisdicciones.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

export const FeaturesCards = () => {
  // Inicializamos nuestro hook
  const { elementRef, isVisible } = useScrollReveal(0.2);

  return (
    <section className={styles.section} ref={elementRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>El estándar en conexión legal</h2>
        <p className={styles.subtitle}>Diseñado para la precisión, construido sobre la confianza.</p>
      </div>

      <div className={styles.grid}>
        {featuresData.map((feature, index) => (
          <div 
            key={feature.id} 
            // Aplicamos la clase base, y si es visible, le sumamos la clase dinámica
            // Usamos el index para darle un pequeño retraso en escalera a la animación
            className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
