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
  slug: string;
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
  enfoqueFoto?: string;
  especialidadesSecundarias: string[];
  educacion: Educacion[];
  mapaUrl: string;
}

export const perfilesAbogados: AbogadoPerfilData[] = [
  {
    id: '1',
    slug: 'dr-rafael-guzman',
    nombre: 'Dr. Rafael Gúzman',
    especialidadPrincipal: 'Derecho Civil',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Abogado especializado con más de 15 años de experiencia en resolución de conflictos civiles.',
    biografia: [
      'El Dr. Rafael Gúzman es una destacado profesional del derecho civil con más de 15 años de trayectoria en Nicaragua.',
      'Ha representado exitosamente a cientos de clientes en casos de divorcios, disputas patrimoniales y reclamaciones legales.',
      'Su enfoque humanista y meticuloso lo ha convertido en uno de las attorneys más recomendadas de Managua.'
    ],
    experienciaAnios: 15,
    tarifaBase: 150,
    moneda: 'USD',
    fotoUrl: '/imagen1.webp',
    fotoAlt: 'Retrato de abogado',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.77815512936!2d-86.34103379394205!3d12.097646806768067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1ses!2sni!4v1776824262040!5m2!1ses!2sni'
  },
  {
    id: '2',
    slug: 'dra-massiel-argüello',
    nombre: 'Dra. Massiel Argüello',
    especialidadPrincipal: 'Derecho Penal',
    ubicacion: 'León, Nicaragua',
    descripcionCorta: 'Abogada penalista con amplia experiencia en procesos judiciales complejos.',
    biografia: [
      'El Dra. Massiel Argüello es una reconocida penalista con más de 12 años de experiencia en el sistema judicial Nicaragüense.',
      'Se ha especializado en la defensa de casos complejos y ha obtenido resultados favorables en múltiples audiencias.',
      'Su trayectoria incluye haber defendido casos de alto impacto mediático en la región.'
    ],
    experienciaAnios: 12,
    tarifaBase: 200,
    moneda: 'USD',
    fotoUrl: '/imagen2.webp',
    fotoAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411095.32687386964!2d-87.80790173562329!3d12.529153889024592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7112e382cf4945%3A0xd42c7706bf89200!2zTGXDs24!5e0!3m2!1ses!2sni!4v1776825843176!5m2!1ses!2sni'
  },
  {
    id: '3',
    slug: 'dr-samuel-lopez',
    nombre: 'Dr. Samuel López',
    especialidadPrincipal: 'Derecho Familiar',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Especialista en derecho de familia con enfoque en mediación y custodia.',
    biografia: [
      'El Dr. Samuel López es un profesional dedicado al derecho de familia con más de 10 años de experiencia.',
      'Ha ayudado a numerosas familias a resolver conflictos de custodia y divorcios de manera éxitosa.',
      'Su compromiso con el bienestar infantil lo distingue en su práctica profesional.'
    ],
    experienciaAnios: 10,
    tarifaBase: 120,
    moneda: 'USD',
    fotoUrl: '/imagen4.webp',
    fotoAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.77815512936!2d-86.34103379394205!3d12.097646806768067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1ses!2sni!4v1776824262040!5m2!1ses!2sni'
  },
  {
    id: '4',
    slug: 'dra-ariadna-lacayo',
    nombre: 'Dra. Ariadna Lacayo',
    especialidadPrincipal: 'Derecho Corporativo',
    ubicacion: 'Granada, Nicaragua',
    descripcionCorta: 'Asesora legal empresarial especializada en mergers y adquisiciones.',
    biografia: [
      'La Dra. Ariadna Lacayo cuenta con más de 18 años de experiencia en derecho corporativo.',
      'Ha asesorado a múltiples empresas nacionales e internacionales en procesos de fusión y adquisición.',
      'Su expertise en regulación empresarial la posiciona como una asesora de confianza.'
    ],
    experienciaAnios: 18,
    tarifaBase: 300,
    moneda: 'USD',
    fotoUrl: '/imagen3.webp',
    fotoAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31229.266725061956!2d-85.98044193403345!3d11.928848547986005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740c91706b1593%3A0x3b8c904dc8ceb48c!2sGranada!5e0!3m2!1ses!2sni!4v1776825509733!5m2!1ses!2sni'
  },
  {
    id: '5',
    slug: 'dr-David-Altamirano',
    nombre: 'Dr. David Altamirano',
    especialidadPrincipal: 'Derecho Laboral',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Abogado laboralista especializado en relaciones obrero-patronales.',
    biografia: [
      'El Dr. David Altamirano  es un profesional del derecho laboral con más de 8 años de experiencia.',
      ' Representa tanto a empleadores como a empleados en disputas laborales.',
      'Su práctica se enfoca en la prevención y resolución de conflictos laborales.'
    ],
    experienciaAnios: 8,
    tarifaBase: 100,
    moneda: 'USD',
    fotoUrl: '/imagen5.webp',
    fotoAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.77815512936!2d-86.34103379394205!3d12.097646806768067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1ses!2sni!4v1776824262040!5m2!1ses!2sni'
  },
  {
    id: '6',
    slug: 'dra-ashley-dona',
    nombre: 'Dra. Ashley Doña',
    especialidadPrincipal: 'Derecho Mercantil',
    ubicacion: 'Masaya, Nicaragua',
    descripcionCorta: 'Abogada mercantilista experta en contratos comerciales.',
    biografia: [
      'La Dra. Ashley Doña tiene más de 14 años de experiencia en derecho mercantil.',
      'Se especializa en la redacción y negociación de contratos comerciales complejos.',
      'Ha asesorado a empresas de diversos sectores en Nicaragua.'
    ],
    experienciaAnios: 14,
    tarifaBase: 180,
    moneda: 'USD',
    fotoUrl: '/imagen7.webp',
    fotoAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62447.86333670637!2d-86.13392448042234!3d11.975092608224594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f74061d911c1529%3A0xf2d6cd6150316ad2!2sMasaya!5e0!3m2!1ses!2sni!4v1776821774721!5m2!1ses!2sni'
  },
  {
    id: '7',
    slug: 'dr-fran-martinez',
    nombre: 'Dr. Fran Martinez',
    especialidadPrincipal: 'Derecho Civil',
    ubicacion: 'León, Nicaragua',
    descripcionCorta: 'Abogado civil con más de 9 años de experiencia en litigios.',
    biografia: [
      'El Dr. Fran Martinez es un abogado especializado en derecho civil con amplia experiencia en León.',
      'Ha representado exitosamente a clientes en disputas contractuales y responsabilidad civil.',
      'Su compromiso con la justicia y la ética profesional lo distinguen en su práctica.'
    ],
    experienciaAnios: 9,
    tarifaBase: 120,
    moneda: 'USD',
    fotoUrl: '/imagen6.webp',
    fotoAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411095.32687386964!2d-87.80790173562329!3d12.529153889024592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7112e382cf4945%3A0xd42c7706bf89200!2zTGXDs24!5e0!3m2!1ses!2sni!4v1776825843176!5m2!1ses!2sni'
  },
  {
    id: '8',
    slug: 'dra-abril-reyes',
    nombre: 'Dra. Abril Reyes',
    especialidadPrincipal: 'Derecho Penal',
    ubicacion: 'Managua, Nicaragua',
    descripcionCorta: 'Abogada penalista con experiencia en defensa criminal.',
    biografia: [
      'La Dra. Abril Reyes es una reconocida penalista en Managua.',
      'Se ha especializado en la defensa de casos complejos y de alto impacto.',
      'Su trayectoria incluye múltiples casos favorables en el sistema judicial.'
    ],
    experienciaAnios: 11,
    tarifaBase: 180,
    moneda: 'USD',
    fotoUrl: '/imagen8.webp',
    fotoAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center 15%',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.77815512936!2d-86.34103379394205!3d12.097646806768067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1ses!2sni!4v1776824262040!5m2!1ses!2sni'
  },
  {
    id: '9',
    slug: 'dr-marco-antonio-sevilla',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.77815512936!2d-86.34103379394205!3d12.097646806768067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1ses!2sni!4v1776824262040!5m2!1ses!2sni'
  },
  {
    id: '10',
    slug: 'dra-sofia-isabella-vargas',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31229.266725061956!2d-85.98044193403345!3d11.928848547986005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740c91706b1593%3A0x3b8c904dc8ceb48c!2sGranada!5e0!3m2!1ses!2sni!4v1776825509733!5m2!1ses!2sni'
  },
  {
    id: '11',
    slug: 'dr-fernando-jose-picado',
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
    enfoqueFoto: 'center',
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
    mapaUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.77815512936!2d-86.34103379394205!3d12.097646806768067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1ses!2sni!4v1776824262040!5m2!1ses!2sni',

  },
  {
    id: '12',
    slug: 'dra-patricia-yaneth-corea',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411095.32687386964!2d-87.80790173562329!3d12.529153889024592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7112e382cf4945%3A0xd42c7706bf89200!2zTGXDs24!5e0!3m2!1ses!2sni!4v1776825843176!5m2!1ses!2sni'
  },
  {
    id: '13',
    slug: 'dr-alejandro-jose-meza',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31229.266725061956!2d-85.98044193403345!3d11.928848547986005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740c91706b1593%3A0x3b8c904dc8ceb48c!2sGranada!5e0!3m2!1ses!2sni!4v1776825509733!5m2!1ses!2sni'
  },
  {
    id: '14',
    slug: 'dra-ingrid-maria-blandon',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62447.86333670637!2d-86.13392448042234!3d11.975092608224594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f74061d911c1529%3A0xf2d6cd6150316ad2!2sMasaya!5e0!3m2!1ses!2sni!4v1776821774721!5m2!1ses!2sni'
  },
  {
    id: '15',
    slug: 'dr-roberto-carlos-alfaro',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411095.32687386964!2d-87.80790173562329!3d12.529153889024592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7112e382cf4945%3A0xd42c7706bf89200!2zTGXDs24!5e0!3m2!1ses!2sni!4v1776825843176!5m2!1ses!2sni'
  },
  {
    id: '16',
    slug: 'dra-melissa-janeth-lopez',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62447.86333670637!2d-86.13392448042234!3d11.975092608224594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f74061d911c1529%3A0xf2d6cd6150316ad2!2sMasaya!5e0!3m2!1ses!2sni!4v1776821774721!5m2!1ses!2sni'
  },
  {
    id: '17',
    slug: 'dr-diego-fernando-montoya',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62447.86333670637!2d-86.13392448042234!3d11.975092608224594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f74061d911c1529%3A0xf2d6cd6150316ad2!2sMasaya!5e0!3m2!1ses!2sni!4v1776821774721!5m2!1ses!2sni'
  },
  {
    id: '18',
    slug: 'dra-brenda-yadira-sequeira',
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
    enfoqueFoto: 'center',
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
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31229.266725061956!2d-85.98044193403345!3d11.928848547986005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740c91706b1593%3A0x3b8c904dc8ceb48c!2sGranada!5e0!3m2!1ses!2sni!4v1776825509733!5m2!1ses!2sni'
  }
];

export const getPerfilAbogado = (idOrSlug: string): AbogadoPerfilData | undefined => {
  return perfilesAbogados.find(p => p.id === idOrSlug || p.slug === idOrSlug);
};
