import React from 'react';
import styles from '../../styles/Directory.module.css';

export const FilterBar: React.FC = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Departamento</label>
        <select className={styles.filterSelect} defaultValue="">
          <option value="" disabled>Seleccionar</option>
          <option>Managua</option>
          <option>León</option>
          <option>Granada</option>
          <option>Matagalpa</option>
          <option>Chinandega</option>
        </select>
      </div>
      
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Especialidad</label>
        <select className={styles.filterSelect} defaultValue="">
          <option value="" disabled>Seleccionar</option>
          <option>Derecho Civil</option>
          <option>Derecho Penal</option>
          <option>Derecho Laboral</option>
          <option>Derecho Corporativo</option>
          <option>Derecho de Familia</option>
        </select>
      </div>
      
      <div>
        <button className={styles.filterBtn}>
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
};