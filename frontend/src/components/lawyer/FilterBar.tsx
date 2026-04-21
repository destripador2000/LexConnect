import React, { useState } from 'react';
import styles from '../../styles/Directory.module.css';
import type { Lawyer } from '../../data/lawyers';

interface Props {
  lawyers: Lawyer[];
  onFilter: (filteredLawyers: Lawyer[]) => void;
}

const getUniqueLocations = (lawyers: Lawyer[]): string[] => {
  const locations = new Set<string>();
  lawyers.forEach(lawyer => {
    const parts = lawyer.location.split(', ');
    if (parts.length > 0) {
      locations.add(parts[0]);
    }
  });
  return Array.from(locations).sort();
};

const getUniqueSpecialties = (lawyers: Lawyer[]): string[] => {
  const specialties = new Set<string>();
  lawyers.forEach(lawyer => {
    specialties.add(lawyer.specialty);
  });
  return Array.from(specialties).sort();
};

export const FilterBar: React.FC<Props> = ({ lawyers, onFilter }) => {
  const [departamento, setDepartamento] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const uniqueLocations = getUniqueLocations(lawyers);
  const uniqueSpecialties = getUniqueSpecialties(lawyers);

  const handleAplicar = () => {
    let filtered = [...lawyers];
    
    if (departamento) {
      filtered = filtered.filter(lawyer => 
        lawyer.location.split(', ')[0] === departamento
      );
    }
    
    if (especialidad) {
      filtered = filtered.filter(lawyer => lawyer.specialty === especialidad);
    }

    const hasFilter = departamento || especialidad;
    
    if (hasFilter) {
      const shuffled = filtered.sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 2);
      onFilter(selected.length > 0 ? selected : filtered);
    } else {
      onFilter(filtered);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Departamento</label>
        <select 
          className={styles.filterSelect} 
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
        >
          <option value="">Todos</option>
          {uniqueLocations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Especialidad</label>
        <select 
          className={styles.filterSelect} 
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
        >
          <option value="">Todas</option>
          {uniqueSpecialties.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>
      
      <div>
        <button className={styles.filterBtn} onClick={handleAplicar}>
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
};