import React from 'react';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  content: string;
  author: string;
  rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, rating = 5 }) => {
  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className={`material-symbols-outlined ${styles.star}`} style={{ fontVariationSettings: "'FILL' 1" }} translate="no">star</span>
        ))}
      </div>
      <p className={styles.content}>"{content}"</p>
      <p className={styles.author}>- {author}</p>
    </div>
  );
};