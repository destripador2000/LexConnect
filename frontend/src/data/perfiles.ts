export interface Educacion {
  id: string;
  nivel: string;
  titulo: string;
  institucion: string;
  honores?: string;
  isPrimary?: boolean;
}

export interface AbogadoPerfilData {
  id: string;
  nombre: string;
  especialidadPrincipal: string;
  ubicacion: string;
  descripcionCorta: string;
  biografia: string[];
  experienciaAnios: number;
  tarifaBase: number;
  moneda: string;
  fotoUrl: string;
  fotoAlt: string;
  especialidadesSecundarias: string[];
  educacion: Educacion[];
  mapaUrl: string;
}

export const perfilesAbogados: AbogadoPerfilData[] = [
  {
    id: '1',
    nombre: 'Dra. Elena Castellón',
    especialidadPrincipal: 'Derecho Civil',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Abogada especializada con más de 15 años de experiencia en resolución de conflictos civiles.',
    biografia: [
      'La Dra. Elena Castellón es una destacada profesional del derecho civil con más de 15 años de trayectoria en Nicaragua.',
      'Ha representado exitosamente a cientos de clientes en casos de divorcios, disputas patrimoniales y reclamaciones legales.',
      'Su enfoque humanista y meticuloso la ha convertido en una de las attorneys más recomendadas de Managua.'
    ],
    experienciaAnios: 15,
    tarifaBase: 150,
    moneda: 'USD',
    fotoUrl: 'https://universidadeuropea.com/resources/media/images/shutterstock_2343004253_1.width-640.jpg',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho de Familia', 'Derecho Contractual'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        honores: 'Mención Honorífica',
        isPrimary: true
      },
      {
        id: 'e2',
        nivel: 'Maestría',
        titulo: 'Maestría en Derecho Civil',
        institucion: 'Universidad de Navarra España',
        honores: 'Diploma de Excelencia'
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.251!3d12.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '2',
    nombre: 'Dr. Ricardo Mendoza',
    especialidadPrincipal: 'Derecho Penal',
    ubicacion: 'León, Nicaragua',
    descripcionCorta: 'Abogado penalista con amplia experiencia en procesos judiciales complejos.',
    biografia: [
      'El Dr. Ricardo Mendoza es un reconocido penalista con más de 12 años de experiencia en el sistema judicial Nicaragüense.',
      'Se ha especializado en la defensa de casos complejos y ha obtenido resultados favorables en múltiples audiencias.',
      'Su trayectoria incluye haber defendido casos de alto impacto mediático en la región.'
    ],
    experienciaAnios: 12,
    tarifaBase: 200,
    moneda: 'USD',
    fotoUrl: 'https://img.freepik.com/fotos-premium/libros-legales-retrato-sonrisa-e-investigacion-abogados-bufete-abogados-administracion-oficina-feliz-o-estudio-aprendizaje-justicia-conocimiento-asesor-financiero-educacion-abogado-o-consultor-hombre-gobierno-mexico_590464-155792.jpg',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Mercantil', 'Derecho Constitutional'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Nacional Autónoma de Nicaragua (UNAN)',
        isPrimary: true
      },
      {
        id: 'e2',
        nivel: 'Especialización',
        titulo: 'Especialización en Derecho Penal',
        institucion: 'Instituto de Estudios Superiores (INES)'
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.878!3d12.398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '3',
    nombre: 'Dra. María Fernanda López',
    especialidadPrincipal: 'Derecho Familiar',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Especialista en derecho de familia con enfoque en mediación y custodia.',
    biografia: [
      'La Dra. María Fernanda López es una profesional dedicada al derecho de familia con más de 10 años de experiencia.',
      'Ha ayudado a numerosas familias a resolver conflictos de custodia y divorcios de manera疏导.',
      'Su compromiso con el bienestar infantil la distingue en su práctica profesional.'
    ],
    experienciaAnios: 10,
    tarifaBase: 120,
    moneda: 'USD',
    fotoUrl: 'https://www.unir.net/wp-content/uploads/2018/03/shutterstock_653652001.jpg',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Civil', 'Mediación Familiar'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.251!3d12.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '4',
    nombre: 'Dr. Carlos Javier Ruiz',
    especialidadPrincipal: 'Derecho Corporativo',
    ubicacion: 'Granada, Nicaragua',
    descripcionCorta: 'Asesor legal empresarial especializado en mergers y adquisiciones.',
    biografia: [
      'El Dr. Carlos Javier Ruiz cuenta con más de 18 años de experiencia en derecho corporativo.',
      'Ha asesorado a múltiples empresas nacionales e internacionales en procesos de fusión y adquisición.',
      'Su expertise en regulación empresarial lo posiciona como un asesor de confianza.'
    ],
    experienciaAnios: 18,
    tarifaBase: 300,
    moneda: 'USD',
    fotoUrl: 'https://esotopa.com/wp-content/uploads/2023/11/Soto-528x621-1.png',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Mercantil', 'Propiedad Intelectual'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad deprivada de Nicaragua',
        isPrimary: true
      },
      {
        id: 'e2',
        nivel: 'Maestría',
        titulo: 'MBA en Gestión Empresarial',
        institucion: 'INCAE Business School'
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-85.951!3d11.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '5',
    nombre: 'Dra. Ana Patricia Vega',
    especialidadPrincipal: 'Derecho Laboral',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Abogada laboralista especializada en relaciones obrero-patronales.',
    biografia: [
      'La Dra. Ana Patricia Vega es una profesional del derecho laboral con más de 8 años de experiencia.',
      ' representa tanto a empleadores como a empleados en disputas laborales.',
      'Su práctica se enfoca en la prevención y resolución de conflictos laborales.'
    ],
    experienciaAnios: 8,
    tarifaBase: 100,
    moneda: 'USD',
    fotoUrl: 'https://media.istockphoto.com/id/1587604256/es/foto/retrato-abogada-y-mujer-negra-con-tablet-sonrisa-y-feliz-en-la-oficina-del-lugar-de-trabajo.jpg?s=612x612&w=0&k=20&c=jyalE8Zgyk_86i4JGA6MCh2LQ0xkYvckGi24O0-ecGg=',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Civil', 'Seguridad Social'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Nacional Autónoma de Nicaragua (UNAN)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.251!3d12.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '6',
    nombre: 'Dr. José Antonio Morales',
    especialidadPrincipal: 'Derecho Mercantil',
    ubicacion: 'Masaya, Nicaragua',
    descripcionCorta: 'Abogado mercantilista experto en contratos comerciales.',
    biografia: [
      'El Dr. José Antonio Morales tiene más de 14 años de experiencia en derecho mercantil.',
      'Se especializa en la redacción y negociación de contratos comerciales complejos.',
      'Ha asesorado a empresas de diversos sectores en Nicaragua.'
    ],
    experienciaAnios: 14,
    tarifaBase: 180,
    moneda: 'USD',
    fotoUrl: 'https://www.abogados.com/sites/default/files/styles/_750px_x_500px_/public/2026-04/shutterstock_2722448341.jpg?itok=2nJO8WxY',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Corporativo', 'Propiedad Intelectual'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      },
      {
        id: 'e2',
        nivel: 'Diplomado',
        titulo: 'Diplomado en Comercio Internacional',
        institucion: 'Universidad Americana'
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.056!3d11.974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '7',
    nombre: 'Dr. Luis Fernando García',
    especialidadPrincipal: 'Derecho Civil',
    ubicacion: 'León, Nicaragua',
    descripcionCorta: 'Abogado civil con más de 9 años de experiencia en litigios.',
    biografia: [
      'El Dr. Luis Fernando García es un abogado especializado en derecho civil con amplia experiencia en León.',
      'Ha representado exitosamente a clientes en disputas contractuales y responsabilidad civil.',
      'Su compromiso con la justicia y la ética profesional lo distinguen en su práctica.'
    ],
    experienciaAnios: 9,
    tarifaBase: 120,
    moneda: 'USD',
    fotoUrl: 'https://www.garridoydonaque.com/wp-content/uploads/2024/07/abogado-de-empresa.jpg',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Contractual', 'Responsabilidad Civil'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Nacional Autónoma de Nicaragua (UNAN)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.878!3d12.398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '8',
    nombre: 'Dra. Carmen Dolores Ruiz',
    especialidadPrincipal: 'Derecho Penal',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Abogada penalista con experiencia en defensa criminal.',
    biografia: [
      'La Dra. Carmen Dolores Ruiz es una reconocida penalista en Managua.',
      'Se ha especializado en la defensa de casos complejos y de alto impacto.',
      'Su trayectoria incluye múltiples casos favorables en el sistema judicial.'
    ],
    experienciaAnios: 11,
    tarifaBase: 180,
    moneda: 'USD',
    fotoUrl: 'https://ss-cnt-001c.esmsv.com/r/content/host1/04c93e93c16ee5a8cdb8368abcf47968//editor/estudio-juridico-panizo-abogada-mar-del-plata.webp',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Procesal Penal', 'Derecho Constitutional'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.251!3d12.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '9',
    nombre: 'Dr. Marco Antonio Sevilla',
    especialidadPrincipal: 'Derecho Mercantil',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Abogado mercantilista especializado en derecho comercial.',
    biografia: [
      'El Dr. Marco Antonio Sevilla cuenta con más de 13 años en derecho mercantil.',
      'Se especializa en contratos comerciales, fusiones y adquisiciones.',
      'Ha asesorado a empresas nacionales e internacionales en Nicaragua.'
    ],
    experienciaAnios: 13,
    tarifaBase: 200,
    moneda: 'USD',
    fotoUrl: 'https://mexico.unir.net/wp-content/uploads/sites/6/2021/03/abogado-litigante.jpg',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Corporativo', 'Contratos Comerciales'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      },
      {
        id: 'e2',
        nivel: 'Maestría',
        titulo: 'Maestría en Derecho Mercantil',
        institucion: 'Universidad de Navarra España'
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.251!3d12.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '10',
    nombre: 'Dra. Sofia Isabella Vargas',
    especialidadPrincipal: 'Derecho Familiar',
    ubicacion: 'Granada, Nicaragua',
    descripcionCorta: 'Especialista en derecho de familia y custodia.',
    biografia: [
      'La Dra. Sofia Isabella Vargas es una profesional dedicada al derecho de familia.',
      'Ha ayudado a numerosas familias a resolver conflictos de custodia y divorcios.',
      'Su compromiso con el bienestar infantil la distingue en su práctica.'
    ],
    experienciaAnios: 8,
    tarifaBase: 110,
    moneda: 'USD',
    fotoUrl: 'https://www.habanaabogados.es/wp-content/uploads/2025/11/HABANA-ABOGADOS-11-scaled.jpg',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Civil', 'Mediación Familiar'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-85.951!3d11.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '11',
    nombre: 'Dr. Fernando José Picado',
    especialidadPrincipal: 'Derecho Corporativo',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Asesor legal empresarial especializado en corporate.',
    biografia: [
      'El Dr. Fernando José Picado es un experto en derecho corporativo.',
      'Ha asesorado a múltiples empresas en procesos de fusión y adquisición.',
      'Su experiencia internacional lo diferencia en su práctica.'
    ],
    experienciaAnios: 16,
    tarifaBase: 280,
    moneda: 'USD',
    fotoUrl: 'https://www.ambitojuridico.com/sites/default/files/styles/imagen_800x400/public/abogado-derecho-juristabig1.jpg.webp?itok=GQfDxm1A',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Mercantil', 'Propiedad Intelectual'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad deprivada de Nicaragua',
        isPrimary: true
      },
      {
        id: 'e2',
        nivel: 'Maestría',
        titulo: 'MBA en Gestión Empresarial',
        institucion: 'INCAE Business School'
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.251!3d12.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '12',
    nombre: 'Dra. Patricia Yaneth Corea',
    especialidadPrincipal: 'Derecho Laboral',
    ubicacion: 'León, Nicaragua',
    descripcionCorta: 'Abogada laboralista especializada en relaciones obrero-patronales.',
    biografia: [
      'La Dra. Patricia Yaneth Corea es una profesional del derecho laboral.',
      'Representa tanto a empleadores como a empleados en disputas laborales.',
      'Su práctica se enfoca en la prevención de conflictos laborales.'
    ],
    experienciaAnios: 7,
    tarifaBase: 95,
    moneda: 'USD',
    fotoUrl: 'https://mariarosagarcia.es/wp-content/uploads/2014/04/Maria-Rosa-Garc%C3%ADa-Abogada-Puerto-Lumbreras.jpg',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Civil', 'Seguridad Social'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Nacional Autónoma de Nicaragua (UNAN)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.878!3d12.398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '13',
    nombre: 'Dr. Alejandro José Meza',
    especialidadPrincipal: 'Derecho Civil',
    ubicacion: 'Granada, Nicaragua',
    descripcionCorta: 'Abogado civil especializado en disputas contractuales.',
    biografia: [
      'El Dr. Alejandro José Meza es un abogado civil con amplia experiencia.',
      'Se especializa en contratos, reclamaciones y disputas patrimoniales.',
      'Su enfoque profesional y detallado lo distingue en Granada.'
    ],
    experienciaAnios: 10,
    tarifaBase: 130,
    moneda: 'USD',
    fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Contractual', 'Responsabilidad Civil'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-85.951!3d11.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '14',
    nombre: 'Dra. Ingrid María Blandón',
    especialidadPrincipal: 'Derecho Penal',
    ubicacion: 'Masaya, Nicaragua',
    descripcionCorta: 'Abogada penalista con experiencia en procesos judiciales.',
    biografia: [
      'La Dra. Ingrid María Blandón es una penalista con experiencia en Masaya.',
      'Se ha especializado en la defensa de casos complejos.',
      'Su trayectoria incluye múltiples casos favorables en la región.'
    ],
    experienciaAnios: 6,
    tarifaBase: 140,
    moneda: 'USD',
    fotoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Procesal Penal', 'Derecho Constitutional'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Nacional Autónoma de Nicaragua (UNAN)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.056!3d11.974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '15',
    nombre: 'Dr. Roberto Carlos Alfaro',
    especialidadPrincipal: 'Derecho Mercantil',
    ubicacion: 'León, Nicaragua',
    descripcionCorta: 'Abogado mercantilista especializado en contratos.',
    biografia: [
      'El Dr. Roberto Carlos Alfaro es un experto en derecho mercantil en León.',
      'Se especializa en contratos comerciales y sociedades.',
      'Ha asesorado a empresas de diversos sectores.'
    ],
    experienciaAnios: 12,
    tarifaBase: 160,
    moneda: 'USD',
    fotoUrl: 'https://clippingrrpp.com/wp-content/uploads/2018/06/abogado-junior-despacho.jpg',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Corporativo', 'Contratos Comerciales'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Nacional Autónoma de Nicaragua (UNAN)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.878!3d12.398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '16',
    nombre: 'Dra. Melissa Janeth López',
    especialidadPrincipal: 'Derecho Familiar',
    ubicacion: 'Masaya, Nicaragua',
    descripcionCorta: 'Especialista en derecho de familia y mediación.',
    biografia: [
      'La Dra. Melissa Janeth López es una profesional del derecho familiar en Masaya.',
      'Se especializa en custodia, divorcios y mediación familiar.',
      'Su compromiso con el bienestar familiar la distingue.'
    ],
    experienciaAnios: 5,
    tarifaBase: 90,
    moneda: 'USD',
    fotoUrl: 'https://www.lawandtrends.com/files/post/imagencabecera/201337/680x452_MUJER%20ABOGADA.jpg',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Civil', 'Mediación Familiar'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.056!3d11.974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '17',
    nombre: 'Dr. Diego Fernando Montoya',
    especialidadPrincipal: 'Derecho Corporativo',
    ubicacion: 'Masaya, Nicaragua',
    descripcionCorta: 'Asesor legal empresarial especializado en corporate.',
    biografia: [
      'El Dr. Diego Fernando Montoya es un experto en derecho corporativo.',
      'Ha asesorado a empresas en procesos de fusión y adquisición.',
      'Su experiencia regional lo diferencia en su práctica.'
    ],
    experienciaAnios: 14,
    tarifaBase: 250,
    moneda: 'USD',
    fotoUrl: 'https://altalegal.com/wp-content/uploads/2023/04/870x576px_Foto_Web_ALTA-Nuevos-CRMariano-Bata.png',
    fotoAlt: 'Retrato de.abogado',
    especialidadesSecundarias: ['Derecho Mercantil', 'Propiedad Intelectual'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad deprivada de Nicaragua',
        isPrimary: true
      },
      {
        id: 'e2',
        nivel: 'Maestría',
        titulo: 'MBA en Gestión Empresarial',
        institucion: 'INCAE Business School'
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-86.056!3d11.974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  },
  {
    id: '18',
    nombre: 'Dra. Brenda Yadira Sequeira',
    especialidadPrincipal: 'Derecho Laboral',
    ubicacion: 'Granada, Nicaragua',
    descripcionCorta: 'Abogada laboralista especialista en relaciones laborales.',
    biografia: [
      'La Dra. Brenda Yadira Sequeira es una profesional del derecho laboral en Granada.',
      'Representa a empleadores y empleados en disputas laborales.',
      'Su práctica se enfoca en la prevención y resolución de conflictos.'
    ],
    experienciaAnios: 9,
    tarifaBase: 105,
    moneda: 'USD',
    fotoUrl: 'https://www.shutterstock.com/image-photo/portrait-beautiful-young-business-woman-600nw-2481341233.jpg',
    fotoAlt: 'Retrato de.abogada',
    especialidadesSecundarias: ['Derecho Civil', 'Seguridad Social'],
    educacion: [
      {
        id: 'e1',
        nivel: 'Universidad',
        titulo: 'Licenciatura en Derecho',
        institucion: 'Universidad Centroamericana (UCA)',
        isPrimary: true
      }
    ],
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.717885409375!2d-85.951!3d11.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
  }
];

export const getPerfilAbogado = (id: string): AbogadoPerfilData | undefined => {
  return perfilesAbogados.find(p => p.id === id);
};