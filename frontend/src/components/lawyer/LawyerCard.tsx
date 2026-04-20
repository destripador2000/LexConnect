import React from 'react';
import styles from '../../styles/Directory.module.css';
import type { Lawyer } from '../../data/lawyers';

interface Props {
  lawyer: Lawyer;
}

export const LawyerCard: React.FC<Props> = ({ lawyer }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img 
          src={lawyer.imageUrl} 
          alt={lawyer.imageAlt} 
          className={styles.cardImg} 
        />
        <div className={styles.cardTag}>
          {lawyer.specialty}
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{lawyer.name}</h3>
        <div className={styles.cardLocation}>
          <span className={`material-symbols-outlined ${styles.locationIcon}`}>
            location_on
          </span>
          <span>{lawyer.location}</span>
        </div>
        <button className={styles.cardBtn}>
          Ver Perfil
        </button>
      </div>
    </div>
  );
};