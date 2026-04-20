import React from 'react';
import styles from '../../styles/Directory.module.css';

export const HeaderDirectory: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.brand}>
          <span className={`material-symbols-outlined ${styles.brandIcon}`}>
            balance
          </span>
          <span className={styles.brandText}>LexConnect NI</span>
        </div>
        
        <button className={styles.accountBtn}>
          <span className={`material-symbols-outlined ${styles.accountIcon}`}>
            account_circle
          </span>
        </button>
      </div>
    </header>
  );
};