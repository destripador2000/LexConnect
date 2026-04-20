import React from 'react';
import layoutStyles from '../../styles/Landing.module.css';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  marginTopClass?: string;
  iconBgClass: string;
  iconColorClass: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText,
  href,
  marginTopClass = '',
}) => {
  const staggerClass = marginTopClass === 'md:mt-12' ? layoutStyles.staggered2 : 
                    marginTopClass === 'md:mt-24' ? layoutStyles.staggered3 : layoutStyles.staggered1;

  const isSecondary = marginTopClass === 'md:mt-24';
  const iconWrapperClass = isSecondary ? styles.iconSecondary : styles.iconPrimary;
  const iconColorClass = isSecondary ? styles.colorSecondary : styles.colorPrimary;
  const linkColorClass = isSecondary ? styles.linkSecondary : styles.linkPrimary;

  return (
    <div className={`${layoutStyles.featureCard} ${staggerClass}`}>
      <div className={`${styles.iconWrapper} ${iconWrapperClass}`}>
        <span className={`material-symbols-outlined ${styles.icon} ${iconColorClass}`}>
          {icon}
        </span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={href} className={`${styles.link} ${linkColorClass}`}>
        {linkText}
        <span className={`material-symbols-outlined ${styles.linkIcon}`}>arrow_forward</span>
      </a>
    </div>
  );
};