import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import layoutStyles from '../../styles/Landing.module.css';
import headerStyles from './Header.module.css';
import dirStyles from '../../styles/Directory.module.css';

export const HeaderDirectory: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <div className={layoutStyles.brandWrapper}>
          <a href="/" className={headerStyles.brand}>
            <span className={`material-symbols-outlined ${headerStyles.iconFilled}`}>gavel</span>
            LexConnect NI
          </a>
        </div>

        <nav className={headerStyles.nav}>
          <a href="/" className={headerStyles.navLink}>Inicio</a>
          <a href="/directorio" className={`${headerStyles.navLink} ${headerStyles.navLinkActive}`}>Directorio</a>
        </nav>

        <div className={layoutStyles.actionWrapper}>
          <button className={headerStyles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${headerStyles.btnIcon}`}>arrow_forward</span>
          </button>
        </div>

        <button className={dirStyles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={dirStyles.mobileDropdown}>
          <a href="/" className={headerStyles.navLink}>Inicio</a>
          <a href="/directorio" className={`${headerStyles.navLink} ${headerStyles.navLinkActive}`}>Directorio</a>
          <button className={headerStyles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${headerStyles.btnIcon}`}>arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
};