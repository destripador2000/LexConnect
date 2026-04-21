export interface Lawyer {
  id: string;
  name: string;
  specialty: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
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
