import React, { useState } from 'react';
import styles from '../styles/Directory.module.css';
import { featuredLawyers } from '../data/lawyers';
import type { Lawyer } from '../data/lawyers';
import { LawyerCard } from '../components/lawyer/LawyerCard';
import { FilterBar } from '../components/lawyer/FilterBar';
import { HeaderDirectory } from '../components/layout/HeaderDirectory';
import { Footer } from '../components/layout/Footer';

export const DirectoryPage: React.FC = () => {
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>(featuredLawyers);

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
            <FilterBar lawyers={featuredLawyers} onFilter={setFilteredLawyers} />
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.gridInner}>
            <div className={styles.gridHeader}>
              <h2 className={styles.gridTitle}>Abogados Disponibles</h2>
              <span className={styles.gridCount}>{filteredLawyers.length} perfiles encontrados</span>
            </div>
            
            <div className={styles.cardsContainer}>
              {filteredLawyers.map(lawyer => (
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
