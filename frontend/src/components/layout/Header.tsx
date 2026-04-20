import React, { useState } from 'react';
import layoutStyles from '../../styles/Landing.module.css';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={layoutStyles.header}>
      <div className={layoutStyles.headerContainer}>
        <a href="#" className={styles.logoLink}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
          LexConnect NI
        </a>

        <nav className={layoutStyles.desktopNav}>
          <button className={styles.ctaButton}>
            Explorar el directorio
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
          </button>
        </nav>

        <button className={layoutStyles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={layoutStyles.mobileDropdown}>
          <button className={styles.ctaButton}>
            Explorar el directorio
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
};