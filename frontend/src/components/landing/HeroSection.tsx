import React from 'react';
import layoutStyles from '../../styles/Landing.module.css';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className={layoutStyles.heroSection} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOh8NUKhk9z366-Mb6MahEKcbDwUl9eaL39hQDfyFEf61XT5eqZFudDpzOGH2df3kgnJk5hfowfEcrVoE04B7wSd5_cCXx7k-yssKFBAXezEe6WjHEMuz5nuEXcgPscwjww2qaITuz8kCcqgv9KxtGjEHsLhuwb5AExgRr0Ts9nJL13CqDhb-C75FMPIdbFjmJ1lFFP0W2KCZ6xY7Td4HMCP6iKepahXnsJ-SqtzBnYQuXd8rx9QH5F9awCpK2MMi9Ioqi6_CQrPCj')" }}>
      <div className={layoutStyles.heroOverlay}></div>
      <div className={layoutStyles.heroContent}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>balance</span>
            <span>Claridad y Autoridad</span>
          </div>
          
          <h1 className={layoutStyles.heroTitle}>
            El puente directo a tu <span className={styles.titleAccent}>abogado perfecto</span>
          </h1>
          
          <p className={styles.heroDescription}>
            Una plataforma editorial curada que conecta a ciudadanos con profesionales del derecho en Nicaragua, priorizando la transparencia y la experiencia.
          </p>
          
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              Explorar el directorio
              <span className="material-symbols-outlined icon" style={{ fontSize: '16px' }}>search</span>
            </button>
            <button className={styles.secondaryButton}>
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};