import React from 'react';
import styles from '../../styles/Landing.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <p className={styles.footerBrandText}>LexConnect NI</p>
          <p className={styles.footerCopyright}>© 2024 LexConnect NI. Jurisprudencia con Claridad.</p>
        </div>
        
        <nav className={styles.footerNav}>
          <a href="#" className={`${styles.footerLink} ${styles.footerLinkPrimary}`}>Directorio</a>
          <a href="#" className={`${styles.footerLink} ${styles.footerLinkSecondary}`}>Servicios</a>
          <a href="#" className={`${styles.footerLink} ${styles.footerLinkSecondary}`}>Privacidad</a>
          <a href="#" className={`${styles.footerLink} ${styles.footerLinkSecondary}`}>Contacto</a>
        </nav>
      </div>
    </footer>
  );
};