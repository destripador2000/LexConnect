import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 10) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // En lugar de detener el observador, simplemente le pasamos el estado de intersección
        // Si entra a la pantalla es true, si sale es false
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [threshold]);

  return { elementRef, isVisible };
};
