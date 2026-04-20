import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContent}>
        <span className={styles.tag}>LA NUEVA ERA LEGAL</span>
        <h1 className={styles.title}>
          ¿Tienes un problema legal? En LexConnect lo puedes resolver.
        </h1>
        <p className={styles.description}>
          La excelencia jurídica a un clic de distancia. Conecta con la élite legal en un entorno diseñado para la precisión y la confianza.
        </p>
        
        {/* Botón único que redirigirá a la vista de búsqueda */}
        <button className={styles.searchButton}>
          Buscar
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <div className={styles.badges}>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            +5000 Abogados
          </div>
          <div className={styles.badge}>
             <svg className={styles.badgeIcon} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Verificados
          </div>
        </div>
      </div>

      <div className={styles.imageContent}>
        <img src={"imagen1.jpg"} alt="Abogado LexConnect" className={styles.lawyerImage}/>
      </div>
    </section>
  );
};
