import React from 'react';
import styles from '../styles/Directory.module.css';
import { featuredLawyers } from '../data/lawyers';
import { LawyerCard } from '../components/lawyer/LawyerCard';
import { FilterBar } from '../components/lawyer/FilterBar';
import { HeaderDirectory } from '../components/layout/HeaderDirectory';
import { Footer } from '../components/layout/Footer';

export const DirectoryPage: React.FC = () => {
  return (
    <>
      <HeaderDirectory />
      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroBg}>
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80" 
              alt="Modern sunlit law office" 
              className={styles.heroImg} 
            />
            <div className={styles.heroOverlay}></div>
          </div>
          
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Directorio de Abogados</h1>
            <p className={styles.heroDesc}>
              Encuentre al especialista jurídico ideal. Nuestra red conecta la excelencia profesional con las necesidades de la ciudadanía nicaragüense.
            </p>
          </div>

          <div className={styles.filterWrapper}>
            <FilterBar />
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.gridInner}>
            <div className={styles.gridHeader}>
              <h2 className={styles.gridTitle}>Abogados Destacados</h2>
              <span className={styles.gridCount}>{featuredLawyers.length} resultados encontrados</span>
            </div>
            
            <div className={styles.cardsContainer}>
              {featuredLawyers.map(lawyer => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};