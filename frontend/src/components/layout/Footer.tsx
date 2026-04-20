import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2026 LexConnect. Todos los derechos reservados.</p>
    </footer>
  );
};