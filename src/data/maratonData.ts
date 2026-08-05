export interface ResultItem {
  pos: number;
  dorsal: string;
  nombre: string;
  distancia: string;
  categoria: string;
  genero: 'M' | 'F';
  tiempo: string;
  tiempoNeto: string;
  ritmo: string;
  carrera: string;
  fecha: string;
  ano: number;
  equipo: string;
  estado: 'Provisional' | 'Oficial' | 'Corregido';
  posGenero: number;
  posCategoria: number;
}

export interface RaceItem {
  id: string;
  title: string;
  date: string;
  fullDate: string;
  isoDate: string; // ISO date for automatic sorting & filtering
  location: string;
  distances: string[];
  isFeatured?: boolean;
  image: string;
  url: string;
  organizer: string;
  status: 'Confirmado' | 'Por confirmar' | 'Finalizado';
}

export interface GroupItem {
  id: string;
  name: string;
  days: string;
  time: string;
  district: string;
  pace: string;
  meetingPoint: string;
  image: string;
  level: string;
  membersCount: number;
  whatsappLink: string;
  instagram: string;
}

export interface RouteItem {
  id: string;
  title: string;
  district: string;
  distanceKm: number;
  elevationM: number;
  difficulty: 'Fácil' | 'Moderado' | 'Difícil';
  surface: 'Asfalto' | 'Tierra' | 'Mixto';
  rating: number;
  image: string;
  gpxUrl: string;
}

export interface PhotographerItem {
  id: string;
  name: string;
  photoCount: number;
  event: string;
  price: string;
  image: string;
  galleriesUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  region: 'Arequipa' | 'Perú' | 'Latam' | 'Mundo';
  summary: string;
  image: string;
  readTime: string;
  url: string;
}

export interface PlanItem {
  id: string;
  title: string;
  level: string;
  durationWeeks: number;
  target: string;
  image: string;
  levelNumber: number;
}

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  logoText: string;
  type: string;
}

export const MOCK_RESULTS: ResultItem[] = [
  {
    pos: 1,
    dorsal: "1024",
    nombre: "Luis Quispe",
    distancia: "21K",
    categoria: "18-29 M",
    genero: "M",
    tiempo: "01:12:24",
    tiempoNeto: "01:12:20",
    ritmo: "03:26",
    carrera: "Media Maratón Cd. Arequipa 2025",
    fecha: "18/05/2025",
    ano: 2025,
    equipo: "ADES Runners del Sur",
    estado: "Oficial",
    posGenero: 1,
    posCategoria: 1,
  },
  {
    pos: 2,
    dorsal: "2048",
    nombre: "María Fernanda P.",
    distancia: "21K",
    categoria: "18-29 F",
    genero: "F",
    tiempo: "01:24:11",
    tiempoNeto: "01:24:08",
    ritmo: "03:59",
    carrera: "Media Maratón Cd. Arequipa 2025",
    fecha: "18/05/2025",
    ano: 2025,
    equipo: "Misti Runners",
    estado: "Oficial",
    posGenero: 1,
    posCategoria: 1,
  },
  {
    pos: 3,
    dorsal: "3096",
    nombre: "Diego Mamani",
    distancia: "10K",
    categoria: "30-39 M",
    genero: "M",
    tiempo: "00:36:45",
    tiempoNeto: "00:36:41",
    ritmo: "03:40",
    carrera: "10K Ciudad de Arequipa 2025",
    fecha: "18/05/2025",
    ano: 2025,
    equipo: "AQP Runners",
    estado: "Oficial",
    posGenero: 2,
    posCategoria: 1,
  },
  {
    pos: 4,
    dorsal: "1105",
    nombre: "Rosa Mendoza Huaman",
    distancia: "21K",
    categoria: "30-39 F",
    genero: "F",
    tiempo: "01:29:40",
    tiempoNeto: "01:29:35",
    ritmo: "04:15",
    carrera: "Media Maratón Cd. Arequipa 2025",
    fecha: "18/05/2025",
    ano: 2025,
    equipo: "Urban Run AQP",
    estado: "Oficial",
    posGenero: 2,
    posCategoria: 1,
  },
  {
    pos: 5,
    dorsal: "4120",
    nombre: "Carlos Eduardo Ramos",
    distancia: "5K",
    categoria: "18-29 M",
    genero: "M",
    tiempo: "00:17:15",
    tiempoNeto: "00:17:12",
    ritmo: "03:27",
    carrera: "5K Yanahuara Running 2025",
    fecha: "18/05/2025",
    ano: 2025,
    equipo: "Independiente",
    estado: "Oficial",
    posGenero: 3,
    posCategoria: 2,
  }
];

export const ALL_RACES_DATABASE: RaceItem[] = [
  // Futuras Carreras (2026)
  {
    id: "media-maraton-arequipa-2026",
    title: "Media Maratón Ciudad de Arequipa",
    date: "09 AGO 2026",
    fullDate: "Domingo 09 de agosto de 2026",
    isoDate: "2026-08-09T06:00:00",
    location: "Plaza de Yanahuara, Arequipa",
    distances: ["21K", "10K", "5K"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=600&auto=format&fit=crop",
    url: "/carreras/media-maraton-ciudad-de-arequipa-2026/",
    organizer: "Event Sports Perú S.R.L.",
    status: "Confirmado",
  },
  {
    id: "carrera-amistad-2026",
    title: "Carrera de la Amistad",
    date: "30 AGO 2026",
    fullDate: "Domingo 30 de agosto de 2026",
    isoDate: "2026-08-30T07:00:00",
    location: "Valle de Chilina, Arequipa",
    distances: ["10K", "5K"],
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=600&auto=format&fit=crop",
    url: "/carreras/",
    organizer: "Municipalidad de Yanahuara",
    status: "Confirmado",
  },
  {
    id: "canopy-10k-2026",
    title: "CANOPY 10K - IV Edición",
    date: "13 SEP 2026",
    fullDate: "Domingo 13 de septiembre de 2026",
    isoDate: "2026-09-13T07:30:00",
    location: "Fundo El Rosal, Cerro Colorado",
    distances: ["10K", "5K"],
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?q=80&w=600&auto=format&fit=crop",
    url: "/carreras/",
    organizer: "Club Canopy AQP",
    status: "Confirmado",
  },
  {
    id: "media-maraton-yanahuara-2026",
    title: "Media Maratón Yanahuara",
    date: "20 SEP 2026",
    fullDate: "Domingo 20 de septiembre de 2026",
    isoDate: "2026-09-20T07:00:00",
    location: "Yanahuara Mirador",
    distances: ["21K", "10K"],
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=600&auto=format&fit=crop",
    url: "/carreras/",
    organizer: "Yanahuara Runners",
    status: "Confirmado",
  },
  {
    id: "maraton-aqp-2026",
    title: "Maratón AQP 42K",
    date: "08 NOV 2026",
    fullDate: "Domingo 08 de noviembre de 2026",
    isoDate: "2026-11-08T06:00:00",
    location: "Plaza de Armas Arequipa",
    distances: ["42K", "21K", "10K"],
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop",
    url: "/carreras/",
    organizer: "Federación Peruana de Atletismo",
    status: "Por confirmar",
  },

  // Carreras Pasadas (Histórico)
  {
    id: "reto-volcanico-2026",
    title: "Reto Volcánico - I Desafío Socabaya",
    date: "26 ABR 2026",
    fullDate: "Domingo 26 de abril de 2026",
    isoDate: "2026-04-26T07:00:00",
    location: "Parque Menelik, Socabaya",
    distances: ["15K", "8K"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop",
    url: "/resultados/",
    organizer: "Socabaya Trail Club",
    status: "Finalizado",
  },
  {
    id: "media-maraton-arequipa-2025",
    title: "Media Maratón Ciudad de Arequipa 2025",
    date: "18 MAY 2025",
    fullDate: "Domingo 18 de mayo de 2025",
    isoDate: "2025-05-18T06:30:00",
    location: "Plaza de Yanahuara",
    distances: ["21K", "10K", "5K"],
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=600&auto=format&fit=crop",
    url: "/resultados/",
    organizer: "Event Sports Perú S.R.L.",
    status: "Finalizado",
  }
];

// Helper to filter races automatically by date
export const getProcessedRaces = (currentIsoDate = new Date().toISOString()) => {
  const upcoming = ALL_RACES_DATABASE.filter((r) => r.isoDate >= currentIsoDate).sort(
    (a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
  );

  const past = ALL_RACES_DATABASE.filter((r) => r.isoDate < currentIsoDate).sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );

  // Auto-highlight the closest upcoming race
  const featuredRace = upcoming.length > 0 ? upcoming[0] : ALL_RACES_DATABASE[0];

  return { upcoming, past, featuredRace };
};

export const FEATURED_RACE = getProcessedRaces().featuredRace;
export const UPCOMING_RACES = getProcessedRaces().upcoming;
export const PAST_RACES = getProcessedRaces().past;

export const RUNNING_GROUPS: GroupItem[] = [
  {
    id: "aqp-runners",
    name: "AQP Runners",
    days: "Martes y Jueves",
    time: "6:00 AM",
    district: "Cayma",
    pace: "5:30 - 6:30 min/km",
    meetingPoint: "Plaza de Cayma",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=500&auto=format&fit=crop",
    level: "Todos los niveles",
    membersCount: 85,
    whatsappLink: "https://chat.whatsapp.com/demo",
    instagram: "@aqprunners"
  },
  {
    id: "misti-runners",
    name: "Misti Runners",
    days: "Lun, Mié y Vie",
    time: "6:00 AM",
    district: "Yanahuara",
    pace: "5:00 - 6:00 min/km",
    meetingPoint: "Puente Chilina",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=500&auto=format&fit=crop",
    level: "Intermedio - Avanzado",
    membersCount: 120,
    whatsappLink: "https://chat.whatsapp.com/demo",
    instagram: "@mistirunners"
  },
  {
    id: "urban-run-aqp",
    name: "Urban Run AQP",
    days: "Todos los Sábados",
    time: "7:00 AM",
    district: "Cercado",
    pace: "6:00 - 7:00 min/km",
    meetingPoint: "Plaza de Armas",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=500&auto=format&fit=crop",
    level: "Principiantes / Recreativo",
    membersCount: 150,
    whatsappLink: "https://chat.whatsapp.com/demo",
    instagram: "@urbanrunaqp"
  },
  {
    id: "trail-arequipa",
    name: "Trail Arequipa",
    days: "Domingos",
    time: "6:30 AM",
    district: "Sabandía",
    pace: "5:30 - 7:00 min/km",
    meetingPoint: "Campiña de Sachaca",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=500&auto=format&fit=crop",
    level: "Trail / Montaña",
    membersCount: 64,
    whatsappLink: "https://chat.whatsapp.com/demo",
    instagram: "@trailarequipa"
  }
];

export const RUNNING_ROUTES: RouteItem[] = [
  {
    id: "circuito-historico",
    title: "Circuito Histórico Yanahuara",
    district: "Cercado / Yanahuara",
    distanceKm: 8.4,
    elevationM: 120,
    difficulty: "Fácil",
    surface: "Asfalto",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?q=80&w=500&auto=format&fit=crop",
    gpxUrl: "#"
  },
  {
    id: "costanera-chili",
    title: "Costanera del Valle del Chili",
    district: "Sachaca",
    distanceKm: 12.6,
    elevationM: 180,
    difficulty: "Fácil",
    surface: "Asfalto",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=500&auto=format&fit=crop",
    gpxUrl: "#"
  },
  {
    id: "ruta-misti",
    title: "Ruta de la Altura al Misti",
    district: "Cayma / Chiguata",
    distanceKm: 18.7,
    elevationM: 650,
    difficulty: "Difícil",
    surface: "Mixto",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=500&auto=format&fit=crop",
    gpxUrl: "#"
  },
  {
    id: "campina-sachaca",
    title: "Campiña de Sachaca & Sabandía",
    district: "Sachaca",
    distanceKm: 5.2,
    elevationM: 95,
    difficulty: "Fácil",
    surface: "Tierra",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=500&auto=format&fit=crop",
    gpxUrl: "#"
  }
];

export const PHOTOGRAPHERS: PhotographerItem[] = [
  {
    id: "foto-run-aqp",
    name: "Foto Run AQP",
    photoCount: 8340,
    event: "Media Maratón 2025",
    price: "S/ 15.00 por foto",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
    galleriesUrl: "/fotografos-running/"
  },
  {
    id: "andes-photos",
    name: "Andes Photos",
    photoCount: 6120,
    event: "10K Ciudad 2025",
    price: "S/ 12.00 por foto",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=500&auto=format&fit=crop",
    galleriesUrl: "/fotografos-running/"
  },
  {
    id: "aqp-sports-shots",
    name: "AQP Sports Shots",
    photoCount: 9870,
    event: "Trail Misti 2025",
    price: "S/ 18.00 por digital HD",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=500&auto=format&fit=crop",
    galleriesUrl: "/fotografos-running/"
  }
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "media-maraton-confirmada-2026",
    title: "Todo listo para la Cuarta Edición de la Media Maratón Ciudad de Arequipa 2026",
    date: "15 MAY 2026",
    region: "Arequipa",
    summary: "Se confirmaron los trazados oficiales en 21K, 10K y 5K con punto de largada en la Plaza de Yanahuara a 2,335m de altitud.",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=600&auto=format&fit=crop",
    readTime: "3 min de lectura",
    url: "/noticias/"
  },
  {
    id: "peruanos-maraton-lima-42k",
    title: "Peruanos destacan con marcas históricas en la Maratón de Lima 42K",
    date: "17 MAY 2026",
    region: "Perú",
    summary: "Los atletas cusqueños y arequipeños lideraron el podio nacional en una intensa jornada de alta competencia.",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop",
    readTime: "4 min de lectura",
    url: "/noticias/"
  },
  {
    id: "calendario-latam-2026",
    title: "Calendario oficial de maratones más importantes de Latinoamérica",
    date: "16 MAY 2026",
    region: "Latam",
    summary: "Revisa las fechas clave de Bogotá, Buenos Aires, Santiago y el circuito andino de grandes distancias.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop",
    readTime: "5 min de lectura",
    url: "/noticias/"
  },
  {
    id: "kipchoge-record-mundial",
    title: "Kipchoge vuelve a romper esquemas en el circuito internacional",
    date: "15 MAY 2026",
    region: "Mundo",
    summary: "El legendario fondista fondista keniata anunció su preparación especial para maratones de gran altitud.",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=600&auto=format&fit=crop",
    readTime: "2 min de lectura",
    url: "/noticias/"
  }
];

export const RUNNING_PLANS: PlanItem[] = [
  {
    id: "empieza-a-correr",
    title: "Empieza a correr",
    level: "Principiantes",
    durationWeeks: 8,
    target: "Construir base aeróbica",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=500&auto=format&fit=crop",
    levelNumber: 1
  },
  {
    id: "plan-5k",
    title: "Plan 5K",
    level: "Mejora tu tiempo",
    durationWeeks: 8,
    target: "Velocidad y control",
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?q=80&w=500&auto=format&fit=crop",
    levelNumber: 2
  },
  {
    id: "plan-10k",
    title: "Plan 10K",
    level: "Rinde tu mejor 10K",
    durationWeeks: 10,
    target: "Fuerza y resistencia",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=500&auto=format&fit=crop",
    levelNumber: 3
  },
  {
    id: "plan-21k",
    title: "Plan 21K",
    level: "Media Maratón",
    durationWeeks: 12,
    target: "Adaptación progresiva",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=500&auto=format&fit=crop",
    levelNumber: 4
  },
  {
    id: "plan-maraton",
    title: "Plan Maratón 42K",
    level: "Avanzado",
    durationWeeks: 16,
    target: "Fondo largo y nutrición",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=500&auto=format&fit=crop",
    levelNumber: 5
  }
];

export const BRANDS: BrandItem[] = [
  { id: "nike", name: "Nike", category: "Artículos deportivos", logoText: "Nike", type: "Calzado / Textil" },
  { id: "gatorade", name: "Gatorade", category: "Hidratación oficial", logoText: "Gatorade", type: "Nutrición & Hidratación" },
  { id: "garmin", name: "Garmin", category: "Relojes GPS", logoText: "Garmin", type: "Tecnología Runner" },
  { id: "san-pablo", name: "Clínica San Pablo", category: "Salud deportiva", logoText: "Clínica San Pablo", type: "Atención Médica" },
  { id: "powerade", name: "Powerade", category: "Hidratación", logoText: "Powerade", type: "Isotónico" },
  { id: "calidda", name: "Cálidda", category: "Energía que impulsa", logoText: "Cálidda", type: "Auspiciador" },
];
