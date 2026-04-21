export interface Lawyer {
  id: string;
  name: string;
  specialty: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
}

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

export const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Dra. Elena Castellón',
    specialty: 'Derecho Civil',
    location: 'Managua, Nicaragua',
    imageUrl: 'https://universidadeuropea.com/resources/media/images/shutterstock_2343004253_1.width-640.jpg',
    imageAlt: 'Retrato de.abogada'
  },
  {
    id: '2',
    name: 'Dr. Ricardo Mendoza',
    specialty: 'Derecho Penal',
    location: 'León, Nicaragua',
    imageUrl: 'https://img.freepik.com/fotos-premium/libros-legales-retrato-sonrisa-e-investigacion-abogados-bufete-abogados-administracion-oficina-feliz-o-estudio-aprendizaje-justicia-conocimiento-asesor-financiero-educacion-abogado-o-consultor-hombre-gobierno-mexico_590464-155792.jpg',
    imageAlt: 'Retrato de.abogado'
  },
  {
    id: '3',
    name: 'Dra. María Fernanda López',
    specialty: 'Derecho Familiar',
    location: 'Managua, Nicaragua',
    imageUrl: 'https://www.unir.net/wp-content/uploads/2018/03/shutterstock_653652001.jpg',
    imageAlt: 'Retrato de.abogada'
  },
  {
    id: '4',
    name: 'Dr. Carlos Javier Ruiz',
    specialty: 'Derecho Corporativo',
    location: 'Granada, Nicaragua',
    imageUrl: 'https://esotopa.com/wp-content/uploads/2023/11/Soto-528x621-1.png',
    imageAlt: 'Retrato de.abogado'
  },
  {
    id: '5',
    name: 'Dra. Ana Patricia Vega',
    specialty: 'Derecho Laboral',
    location: 'Managua, Nicaragua',
    imageUrl: 'https://media.istockphoto.com/id/1587604256/es/foto/retrato-abogada-y-mujer-negra-con-tablet-sonrisa-y-feliz-en-la-oficina-del-lugar-de-trabajo.jpg?s=612x612&w=0&k=20&c=jyalE8Zgyk_86i4JGA6MCh2LQ0xkYvckGi24O0-ecGg=',
    imageAlt: 'Retrato de.abogada'
  },
  {
    id: '6',
    name: 'Dr. José Antonio Morales',
    specialty: 'Derecho Mercantil',
    location: 'Masaya, Nicaragua',
    imageUrl: 'https://www.abogados.com/sites/default/files/styles/_750px_x_500px_/public/2026-04/shutterstock_2722448341.jpg?itok=2nJO8WxY',
    imageAlt: 'Retrato de.abogado'
  }
];

export const featuredLawyers = lawyers;

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
    fotoAlt: 'Retrato de la Dra. Elena Castellón',
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
    fotoAlt: 'Retrato del Dr. Ricardo Mendoza',
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
    fotoAlt: 'Retrato de la Dra. María Fernanda López',
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
    fotoAlt: 'Retrato del Dr. Carlos Javier Ruiz',
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
    fotoAlt: 'Retrato de la Dra. Ana Patricia Vega',
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
    fotoAlt: 'Retrato del Dr. José Antonio Morales',
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
  }
];

export const getPerfilAbogado = (id: string): AbogadoPerfilData | undefined => {
  return perfilesAbogados.find(p => p.id === id);
};