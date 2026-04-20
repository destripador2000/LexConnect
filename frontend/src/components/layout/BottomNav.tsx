import React from 'react';
import styles from '../../styles/Directory.module.css';

export const BottomNav: React.FC = () => {
  return (
    <nav className={styles.bottomNav}>
      <button className={styles.navItem}>
        <span className="material-symbols-outlined">home</span>
        <span className={styles.navItemText}>Inicio</span>
      </button>
      
      <button className={`${styles.navItem} ${styles.navItemActive}`}>
        <span className={`material-symbols-outlined ${styles.navIconFilled}`}>
          search
        </span>
        <span className={styles.navItemText}>Explorar</span>
      </button>
      
      <button className={styles.navItem}>
        <span className="material-symbols-outlined">grade</span>
        <span className={styles.navItemText}>Favoritos</span>
      </button>
      
      <button className={styles.navItem}>
        <span className="material-symbols-outlined">person</span>
        <span className={styles.navItemText}>Perfil</span>
      </button>
    </nav>
  );
};