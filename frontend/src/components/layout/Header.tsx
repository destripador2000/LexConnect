import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import layoutStyles from '../../styles/Landing.module.css';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={layoutStyles.brandWrapper}>
          <a href="/" className={styles.brand}>
            <span className={`material-symbols-outlined ${styles.iconFilled}`}>gavel</span>
            LexConnect NI
          </a>
        </div>

        <nav className={styles.nav}>
          <a href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>Inicio</a>
          <a href="/directorio" className={styles.navLink}>Directorio</a>
        </nav>

        <div className={layoutStyles.actionWrapper}>
          <button className={styles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${styles.btnIcon}`}>arrow_forward</span>
          </button>
        </div>

        <button className={layoutStyles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={layoutStyles.mobileDropdown}>
          <a href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>Inicio</a>
          <a href="/directorio" className={styles.navLink}>Directorio</a>
          <button className={styles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${styles.btnIcon}`}>arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
};