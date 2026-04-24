import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
          <Link to="/" className={headerStyles.brand}>
            <span className={`material-symbols-outlined ${headerStyles.iconFilled}`} translate="no">gavel</span>
            LexConnect NI
          </Link>
        </div>

        <nav className={headerStyles.nav}>
          <Link to="/" className={headerStyles.navLink}>Inicio</Link>
          <Link to="/directorio" className={`${headerStyles.navLink} ${headerStyles.navLinkActive}`}>Directorio</Link>
        </nav>

        <div className={layoutStyles.actionWrapper}>
          <button className={headerStyles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${headerStyles.btnIcon}`} translate="no">arrow_forward</span>
          </button>
        </div>

        <button className={dirStyles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined" translate="no">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={dirStyles.mobileDropdown}>
          <Link to="/" className={headerStyles.navLink}>Inicio</Link>
          <Link to="/directorio" className={`${headerStyles.navLink} ${headerStyles.navLinkActive}`}>Directorio</Link>
          <button className={headerStyles.actionBtn} onClick={() => navigate('/directorio')}>
            Explorar el directorio
            <span className={`material-symbols-outlined ${headerStyles.btnIcon}`} translate="no">arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
};