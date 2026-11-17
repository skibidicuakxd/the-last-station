export interface Credit {
  role: string;
  name: string;
}

export interface CastMember {
  id: string;
  character: string;
  actor: string;
  description: string;
  photo: string;
  photoAlt: string;
}

export interface ProductionStage {
  id: string;
  number: string;
  title: string;
  description: string;
  photo: string;
  photoAlt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface EventInfo {
  label: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  admission: string;
  mapUrl: string;
  /** Fecha en formato ISO (AAAA-MM-DDTHH:mm) solo cuando esté confirmada. */
  dateISO: string;
  /** Archivo /media/funcion.jpg (1200 × 1600). */
  image: string;
  imageAlt: string;
}

export interface Labels {
  skipLink: string;
  menuOpen: string;
  menuClose: string;
  navCta: string;
  watchFilm: string;
  viewCast: string;
  scrollHint: string;
  synopsis: string;
  quickCredits: string;
  technicalSheet: string;
  sectionFilm: string;
  sectionCast: string;
  sectionProduction: string;
  sectionEvent: string;
  castCount: string;
  stageCount: string;
  filmCaption: string;
  actorLabel: string;
  dateLabel: string;
  timeLabel: string;
  venueLabel: string;
  addressLabel: string;
  admissionLabel: string;
  mapLabel: string;
  footerEnd: string;
  duration: string;
  genreLabel: string;
  yearLabel: string;
  formatLabel: string;
  play: string;
  playDisabled: string;
  videoPending: string;
  photoPending: string;
  posterPending: string;
  closeVideo: string;
  videoTitle: string;
  backToTop: string;
  map: string;
  mapPending: string;
  countdown: string;
  countdownEnded: string;
  socialPending: string;
  footerCredits: string;
  footerSocial: string;
  footerAbout: string;
  thanks: string;
  anden: string;
  archive: string;
  allRights: string;
}

export interface FilmContent {
  title: string;
  titleEs: string;
  tagline: string;
  metaDescription: string;
  synopsis: string;
  videoUrl: string;
  poster: string;
  posterAlt: string;
  heroImage: string;
  heroAlt: string;
  duration: string;
  year: string;
  genre: string;
  format: string;
  event: EventInfo;
  credits: Credit[];
  cast: CastMember[];
  production: ProductionStage[];
  social: { label: string; url: string }[];
  footerNote: string;
  footerClosing: string;
  acknowledgements: string;
  copyrightYear: string;
  nav: NavLink[];
  labels: Labels;
}

export const film: FilmContent = {
  // REEMPLAZAR: título definitivo si cambia.
  title: 'The Last Station',
  titleEs: 'La última estación',

  // REEMPLAZAR: tagline aprobada por el cliente.
  tagline: 'Seis amigos. Una estación abandonada. Uno de ellos no quiere que salgan.',

  // REEMPLAZAR: descripción para buscadores (máximo 155 caracteres).
  metaDescription:
    'Casa abierta y proyección única de The Last Station, un cortometraje de terror y misterio. Consulta fecha, lugar y entrada libre.',

  // REEMPLAZAR: sinopsis definitiva.
  synopsis:
    'Un grupo de amigos llega a una estación de tren abandonada para grabar un documental. Cuando cae la noche, las grabaciones empiezan a mostrar a una persona menos. Alguien entre ellos está borrando a los demás, uno por uno.',

  // REEMPLAZAR: enlace de YouTube, Vimeo o archivo .mp4. Vacío = video pendiente.
  videoUrl: '',

  // REEMPLAZAR: archivo /media/poster.jpg (1200 × 1600).
  poster: '/media/poster.jpg',
  posterAlt: 'Póster pendiente de The Last Station.',

  // REEMPLAZAR: archivo /media/hero.jpg (2400 × 1350). Vacío o inexistente = atmósfera CSS.
  heroImage: '/media/hero.jpg',
  heroAlt: 'Fotografía pendiente de la estación abandonada.',

  // REEMPLAZAR: datos técnicos reales.
  duration: '[DURACIÓN]',
  year: '2026',
  genre: 'Terror / Misterio',
  format: '[FORMATO]',

  event: {
    // REEMPLAZAR: datos confirmados de la función.
    label: 'Casa abierta · Función única',
    date: '[FECHA]',
    time: '[HORA]',
    venue: '[LUGAR]',
    address: '[DIRECCIÓN]',
    admission: 'Entrada libre',
    mapUrl: '',
    dateISO: '',
    // REEMPLAZAR: imagen /media/funcion.jpg (1200 × 1600). Si falta, se muestra el marco pendiente.
    image: '/media/funcion.jpg',
    imageAlt: 'Imagen pendiente de la función de The Last Station.',
  },

  // REEMPLAZAR: nombres reales del equipo.
  credits: [
    { role: 'Dirección', name: '[NOMBRE]' },
    { role: 'Guion', name: '[NOMBRE]' },
    { role: 'Producción', name: '[NOMBRE]' },
    { role: 'Fotografía', name: '[NOMBRE]' },
    { role: 'Edición', name: '[NOMBRE]' },
    { role: 'Sonido', name: '[NOMBRE]' },
    { role: 'Música', name: '[NOMBRE]' },
  ],

  // REEMPLAZAR: personajes, intérpretes y retratos reales.
  cast: [
    {
      id: '01',
      character: 'PERSONAJE 01',
      actor: 'pato',
      description: 'es un pato',
      photo: '/media/cast-01.jpg',
      photoAlt: 'Retrato de pato, intérprete del personaje 01.',
    },
    {
      id: '02',
      character: 'PERSONAJE 02',
      actor: 'INTÉRPRETE 02',
      description: 'Descripción breve del personaje.',
      photo: '/media/cast-02.jpg',
      photoAlt: 'Retrato pendiente de PERSONAJE 02.',
    },
    {
      id: '03',
      character: 'PERSONAJE 03',
      actor: 'INTÉRPRETE 03',
      description: 'Descripción breve del personaje.',
      photo: '/media/cast-03.jpg',
      photoAlt: 'Retrato pendiente de PERSONAJE 03.',
    },
    {
      id: '04',
      character: 'PERSONAJE 04',
      actor: 'INTÉRPRETE 04',
      description: 'Descripción breve del personaje.',
      photo: '/media/cast-04.jpg',
      photoAlt: 'Retrato pendiente de PERSONAJE 04.',
    },
    {
      id: '05',
      character: 'PERSONAJE 05',
      actor: 'INTÉRPRETE 05',
      description: 'Descripción breve del personaje.',
      photo: '/media/cast-05.jpg',
      photoAlt: 'Retrato pendiente de PERSONAJE 05.',
    },
    {
      id: '06',
      character: 'PERSONAJE 06',
      actor: 'INTÉRPRETE 06',
      description: 'Descripción breve del personaje.',
      photo: '/media/cast-06.jpg',
      photoAlt: 'Retrato pendiente de PERSONAJE 06.',
    },
  ],

  // REEMPLAZAR: textos y fotos reales del proceso.
  production: [
    {
      id: '01',
      number: '01',
      title: 'Guion / Storyboard',
      description: 'Del papel a la estación.',
      photo: '/media/bts-01.jpg',
      photoAlt: 'Foto pendiente del proceso de guion y storyboard.',
    },
    {
      id: '02',
      number: '02',
      title: 'Rodaje / Grabación',
      description: 'Tres noches, una linterna.',
      photo: '/media/bts-02.jpg',
      photoAlt: 'Foto pendiente del rodaje.',
    },
    {
      id: '03',
      number: '03',
      title: 'Edición / Detrás de cámaras',
      description: 'El montaje del silencio.',
      photo: '/media/bts-03.jpg',
      photoAlt: 'Foto pendiente del proceso de edición.',
    },
  ],

  // REEMPLAZAR: enlaces reales. Si la URL está vacía, no se muestra el enlace.
  social: [
    { label: 'Instagram', url: '' },
    { label: 'YouTube', url: '' },
  ],

  footerNote: 'Cortometraje independiente.',

  // REEMPLAZAR: frase de cierre del footer.
  footerClosing: 'Nos vemos en el andén.',

  // REEMPLAZAR: agradecimientos reales.
  acknowledgements: '[AGRADECIMIENTOS]',

  copyrightYear: '2026',

  nav: [
    { label: 'El corto', href: '#el-corto' },
    { label: 'Reparto', href: '#reparto' },
    { label: 'Producción', href: '#produccion' },
    { label: 'Función', href: '#funcion' },
  ],

  labels: {
    skipLink: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    navCta: 'Ver el corto',
    watchFilm: 'Ver el cortometraje',
    viewCast: 'Reparto',
    scrollHint: 'Baja al andén',
    synopsis: 'Sinopsis',
    quickCredits: 'Créditos rápidos',
    technicalSheet: 'Ficha técnica',
    sectionFilm: 'El corto',
    sectionCast: 'Reparto',
    sectionProduction: 'Detrás de cámaras',
    sectionEvent: 'Casa abierta',
    castCount: 'fichas',
    stageCount: 'etapas',
    filmCaption: 'Cortometraje',
    actorLabel: 'Intérprete',
    dateLabel: 'Fecha',
    timeLabel: 'Hora',
    venueLabel: 'Lugar',
    addressLabel: 'Dirección',
    admissionLabel: 'Entrada',
    mapLabel: 'Mapa',
    footerEnd: 'Fin del expediente',
    duration: 'Duración',
    genreLabel: 'Género',
    yearLabel: 'Año',
    formatLabel: 'Formato',
    play: 'Reproducir el cortometraje',
    playDisabled: 'El video todavía no está disponible',
    videoPending: 'Video pendiente',
    photoPending: 'Foto pendiente',
    posterPending: 'Póster pendiente',
    closeVideo: 'Cerrar video',
    videoTitle: 'The Last Station — cortometraje',
    backToTop: 'Volver arriba',
    map: 'Cómo llegar',
    mapPending: 'Dirección pendiente',
    countdown: 'Faltan',
    countdownEnded: 'La función ya ocurrió',
    socialPending: 'Redes sociales pendientes',
    footerCredits: 'Créditos',
    footerSocial: 'Redes',
    footerAbout: 'Función',
    thanks: 'Agradecimientos',
    anden: 'Andén',
    archive: 'Expediente',
    allRights: 'Todos los derechos reservados',
  },
};
