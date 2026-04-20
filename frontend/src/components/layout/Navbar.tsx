import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Aplicar el tema al atributo del HTML
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logoLink}>
        <img src="logo.png" /* Coloca el logo en la carpeta public/ o assets/ */alt="LexConnect Logo" className={styles.logoImage}/>
      </a>
      <button 
        className={styles.themeToggle} 
        onClick={() => setIsDark(!isDark)}
        aria-label="Cambiar tema"
      >
        {isDark ? (
           // Icono de Sol para volver a modo claro
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          // Icono de Luna
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </nav>
  );
};
