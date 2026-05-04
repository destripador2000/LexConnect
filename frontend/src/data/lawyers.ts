export interface Lawyer {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  enfoqueFoto?: string;
}

export const lawyers: Lawyer[] = [
  {
    id: '1',
    slug: 'dr-rafael-guzman',
    name: 'Dr. Rafael Gúzman',
    specialty: 'Derecho Civil',
    location: 'Managua, Nicaragua',
    imageUrl: '/imagen1.webp',
    imageAlt: 'Retrato de abogado',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '2',
    slug: 'dra-massiel-argüello',
    name: 'Dra. Massiel Argüello',
    specialty: 'Derecho Penal',
    location: 'León, Nicaragua',
    imageUrl: '/imagen2.webp',
    imageAlt: 'Retrato de abogado',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '3',
    slug: 'dr-samuel-lopez',
    name: 'Dr. Samuel López',
    specialty: 'Derecho Familiar',
    location: 'Managua, Nicaragua',
    imageUrl: '/imagen4.webp',
    imageAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '4',
    slug: 'dra-ariadna-lacayo',
    name: 'Dra. Ariadna Lacayo',
    specialty: 'Derecho Corporativo',
    location: 'Granada, Nicaragua',
    imageUrl: '/imagen3.webp',
    imageAlt: 'Retrato de abogado',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '5',
    slug: 'dr-David-Altamirano',
    name: 'Dr. David Altamirano',
    specialty: 'Derecho Laboral',
    location: 'Managua, Nicaragua',
    imageUrl: '/imagen5.webp',
    imageAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '6',
    slug: 'dra-ashley-dona',
    name: 'Dra. Ashley Doña',
    specialty: 'Derecho Mercantil',
    location: 'Masaya, Nicaragua',
    imageUrl: '/imagen7.webp',
    imageAlt: 'Retrato de abogada',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '7',
    slug: 'dr-fran-martinez',
    name: 'Dr. Fran Martinez',
    specialty: 'Derecho Civil',
    location: 'León, Nicaragua',
    imageUrl: '/imagen6.webp',
    imageAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '8',
    slug: 'dra-abril-reyes',
    name: 'Dra. Abril Reyes',
    specialty: 'Derecho Penal',
    location: 'Managua, Nicaragua',
    imageUrl: '/imagen8.webp',
    imageAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center 15%'
  },
  {
    id: '9',
    slug: 'dr-marco-antonio-sevilla',
    name: 'Dr. Marco Antonio Sevilla',
    specialty: 'Derecho Mercantil',
    location: 'Managua, Nicaragua',
    imageUrl: 'https://mexico.unir.net/wp-content/uploads/sites/6/2021/03/abogado-litigante.jpg',
    imageAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center'
  },
  {
    id: '10',
    slug: 'dra-sofia-isabella-vargas',
    name: 'Dra. Sofia Isabella Vargas',
    specialty: 'Derecho Familiar',
    location: 'Granada, Nicaragua',
    imageUrl: 'https://www.habanaabogados.es/wp-content/uploads/2025/11/HABANA-ABOGADOS-11-scaled.jpg',
    imageAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center'
  },
  {
    id: '11',
    slug: 'dr-fernando-jose-picado',
    name: 'Dr. Fernando José Picado',
    specialty: 'Derecho Corporativo',
    location: 'Managua, Nicaragua',
    imageUrl: 'https://www.ambitojuridico.com/sites/default/files/styles/imagen_800x400/public/abogado-derecho-juristabig1.jpg.webp?itok=GQfDxm1A',
    imageAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center'
  },
  {
    id: '12',
    slug: 'dra-patricia-yaneth-corea',
    name: 'Dra. Patricia Yaneth Corea',
    specialty: 'Derecho Laboral',
    location: 'León, Nicaragua',
    imageUrl: 'https://mariarosagarcia.es/wp-content/uploads/2014/04/Maria-Rosa-Garc%C3%ADa-Abogada-Puerto-Lumbreras.jpg',
    imageAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center'
  },
  {
    id: '13',
    slug: 'dr-alejandro-jose-meza',
    name: 'Dr. Alejandro José Meza',
    specialty: 'Derecho Civil',
    location: 'Granada, Nicaragua',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    imageAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center'
  },
  {
    id: '14',
    slug: 'dra-ingrid-maria-blandon',
    name: 'Dra. Ingrid María Blandón',
    specialty: 'Derecho Penal',
    location: 'Masaya, Nicaragua',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
    imageAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center'
  },
  {
    id: '15',
    slug: 'dr-roberto-carlos-alfaro',
    name: 'Dr. Roberto Carlos Alfaro',
    specialty: 'Derecho Mercantil',
    location: 'León, Nicaragua',
    imageUrl: 'https://clippingrrpp.com/wp-content/uploads/2018/06/abogado-junior-despacho.jpg',
    imageAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center'
  },
  {
    id: '16',
    slug: 'dra-melissa-janeth-lopez',
    name: 'Dra. Melissa Janeth López',
    specialty: 'Derecho Familiar',
    location: 'Masaya, Nicaragua',
    imageUrl: 'https://www.lawandtrends.com/files/post/imagencabecera/201337/680x452_MUJER%20ABOGADA.jpg',
    imageAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center'
  },
  {
    id: '17',
    slug: 'dr-diego-fernando-montoya',
    name: 'Dr. Diego Fernando Montoya',
    specialty: 'Derecho Corporativo',
    location: 'Masaya, Nicaragua',
    imageUrl: 'https://altalegal.com/wp-content/uploads/2023/04/870x576px_Foto_Web_ALTA-Nuevos-CRMariano-Bata.png',
    imageAlt: 'Retrato de.abogado',
    enfoqueFoto: 'center'
  },
  {
    id: '18',
    slug: 'dra-brenda-yadira-sequeira',
    name: 'Dra. Brenda Yadira Sequeira',
    specialty: 'Derecho Laboral',
    location: 'Granada, Nicaragua',
    imageUrl: 'https://www.shutterstock.com/image-photo/portrait-beautiful-young-business-woman-600nw-2481341233.jpg',
    imageAlt: 'Retrato de.abogada',
    enfoqueFoto: 'center'
  }
];

export const featuredLawyers = lawyers;
