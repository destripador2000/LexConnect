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
    imageUrl: 'https://lh3.googleusercontent.com/a/AGFY',
    imageAlt: 'Retrato de.abogada'
  },
  {
    id: '2',
    name: 'Dr. Ricardo Mendoza',
    specialty: 'Derecho Penal',
    location: 'León, Nicaragua',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGFY',
    imageAlt: 'Retrato de.abogado'
  },
  {
    id: '3',
    name: 'Dra. María Fernanda López',
    specialty: 'Derecho Familiar',
    location: 'Managua, Nicaragua',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGFY',
    imageAlt: 'Retrato de.abogada'
  },
  {
    id: '4',
    name: 'Dr. Carlos Javier Ruiz',
    specialty: 'Derecho Corporativo',
    location: 'Granada, Nicaragua',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGFY',
    imageAlt: 'Retrato de.abogado'
  },
  {
    id: '5',
    name: 'Dra. Ana Patricia Vega',
    specialty: 'Derecho Laboral',
    location: 'Managua, Nicaragua',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGFY',
    imageAlt: 'Retrato de.abogada'
  },
  {
    id: '6',
    name: 'Dr. José Antonio Morales',
    specialty: 'Derecho Mercantil',
    location: 'Masaya, Nicaragua',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGFY',
    imageAlt: 'Retrato de.abogado'
  }
];

export const featuredLawyers = lawyers;