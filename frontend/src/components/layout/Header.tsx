import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import layoutStyles from '../../styles/Landing.module.css';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isPerfilActive = location.pathname.startsWith('/perfil/');

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={layoutStyles.brandWrapper}>
          <Link to="/" className={styles.brand}>
            <span className={`material-symbols-outlined ${styles.iconFilled}`} translate="no">gavel</span>
            LexConnect NI
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link to="/" className={isActive('/') ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>Inicio</Link>
          <Link to="/directorio" className={isActive('/directorio') ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>Directorio</Link>
          {isPerfilActive && (
            <span className={`${styles.navLink} ${styles.navLinkActive}`}>Perfil</span>
          )}
        </nav>

        <div className={layoutStyles.actionWrapper}>
          <button className={styles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${styles.btnIcon}`} translate="no">arrow_forward</span>
          </button>
        </div>

        <button className={layoutStyles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined" translate="no">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={layoutStyles.mobileDropdown}>
          <Link to="/" className={isActive('/') ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>Inicio</Link>
          <Link to="/directorio" className={isActive('/directorio') ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>Directorio</Link>
          {isPerfilActive && (
            <span className={`${styles.navLink} ${styles.navLinkActive}`}>Perfil</span>
          )}
          <button className={styles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${styles.btnIcon}`} translate="no">arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
};