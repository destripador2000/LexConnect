import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LawyerCard.module.css';
import type { Lawyer } from '../../data/lawyers';

interface Props {
  lawyer: Lawyer;
}

export const LawyerCard: React.FC<Props> = ({ lawyer }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img 
          src={lawyer.imageUrl} 
          alt={lawyer.imageAlt} 
          className={styles.cardImg}
          style={{ objectPosition: lawyer.enfoqueFoto || 'center' }}
        />
        <div className={styles.cardTag}>
          {lawyer.specialty}
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{lawyer.name}</h3>
        <div className={styles.cardLocation}>
          <span className={`material-symbols-outlined ${styles.locationIcon}`} translate="no">
            location_on
          </span>
          <span>{lawyer.location}</span>
        </div>
        <button 
          className={styles.cardBtn}
          onClick={() => navigate(`/perfil/${lawyer.slug}`)}
        >
          Ver Perfil
        </button>
      </div>
    </div>
  );
};