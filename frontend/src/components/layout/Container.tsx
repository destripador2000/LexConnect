import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  as?: 'div' | 'section' | 'main' | 'header' | 'footer';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className,
  as: Component = 'div',
}) => {
  const classNames = [styles.container, styles[size], className].filter(Boolean).join(' ');

  return <Component className={classNames}>{children}</Component>;
};