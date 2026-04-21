import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPerfilAbogado } from '../../data/lawyers';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import styles from '../../styles/PerfilAbogado.module.css';

export const LawyerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? getPerfilAbogado(id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <>
        <Header />
        <main className={styles.mainContainer}>
          <p>Perfil no encontrado</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.profileHeader}>
          <div className={styles.imageWrapper}>
            <img 
              src={data.fotoUrl} 
              alt={data.fotoAlt} 
              className={styles.profileImage} 
            />
          </div>
          
          <div className={styles.infoWrapper}>
            <div>
              <div className={styles.tagsRow}>
                <span className={styles.mainSpecialtyTag}>
                  {data.especialidadPrincipal}
                </span>
                <div className={styles.locationText}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    location_on
                  </span>
                  <span>{data.ubicacion}</span>
                </div>
              </div>
              
              <h1 className={styles.nameTitle}>{data.nombre}</h1>
              <p className={styles.shortBio}>{data.descripcionCorta}</p>
            </div>
            
            <div className={styles.statsContainer}>
              <div className={styles.statsGrid}>
                <div className={styles.statBox}>
                  <div className={styles.statHeader}>
                    <span className={`material-symbols-outlined ${styles.iconFilled}`}>
                      workspace_premium
                    </span>
                    <span className={styles.statLabel}>Experiencia</span>
                  </div>
                  <span className={styles.statValue}>{data.experienciaAnios} años</span>
                </div>
                
                <div className={styles.statBox}>
                  <div className={styles.statHeader}>
                    <span className={`material-symbols-outlined ${styles.iconFilled}`}>
                      payments
                    </span>
                    <span className={styles.statLabel}>Tarifa Base</span>
                  </div>
                  <span className={styles.statValue}>
                    ${data.tarifaBase} <span className={styles.statCurrency}>{data.moneda}</span>
                  </span>
                </div>
              </div>
              
              <button className={styles.contactBtn}>
                Contactar
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <section>
              <h2 className={styles.sectionTitle}>Acerca de</h2>
              <div>
                {data.biografia.map((parrafo, index) => (
                  <p key={index} className={styles.bioParagraph}>
                    {parrafo}
                  </p>
                ))}
              </div>
            </section>

            <section>
              <h3 className={styles.sectionTitle}>
                <span className={styles.titleDecorator}></span>
                Formación Académica
              </h3>
              
              <div className={styles.timeline}>
                {data.educacion.map((edu) => (
                  <div key={edu.id} className={styles.timelineItem}>
                    <div className={edu.isPrimary ? styles.timelineDotPrimary : styles.timelineDotSecondary}></div>
                    
                    <div className={edu.isPrimary ? styles.eduCard : styles.eduCardLight}>
                      <span className={edu.isPrimary ? styles.eduLevelPrimary : styles.eduLevelSecondary}>
                        {edu.nivel}
                      </span>
                      <h4 className={styles.eduTitle}>{edu.titulo}</h4>
                      <p className={styles.eduUni}>{edu.institucion}</p>
                      {edu.honores && (
                        <p className={styles.eduHonors}>{edu.honores}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.sidebarBox}>
              <h3 className={styles.sidebarTitle}>Especialidades</h3>
              <div className={styles.tagsGrid}>
                {data.especialidadesSecundarias.map((tag, index) => (
                  <span key={index} className={styles.skillTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={styles.sidebarBoxWhite}>
              <h3 className={styles.sidebarTitle}>Ubicación</h3>
              <div className={styles.mapWrapper}>
                <img 
                  src={data.mapaUrl} 
                  alt="Mapa de ubicación" 
                  className={styles.mapImage} 
                />
              </div>
              <p className={styles.addressText}>
                <span className="material-symbols-outlined" style={{ color: '#003084', fontSize: '18px' }}>
                  location_on
                </span>
                {data.ubicacion}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LawyerProfile;