export const business = {
  name: "Stellas fransar",
  tagline: "Certifierad fransstylist i Rosendal",
  description:
    "Hemstudio för fransförlängning i Rosendal — certifierad stylist Stella skapar volymfransar, singelfransar och lashlift med omsorg om varje öga.",
  category: "Fransstudio",
  address: {
    street: "Torgny Segerstedts Allé 21",
    postalCode: "756 44",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: null as string | null,
  phoneLink: null as string | null,
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/stellas-fransar-uppsala-131342",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: null as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: null as string | null,
  instagramUrl: "https://www.instagram.com/Stellasfransar/" as string | null,
  owner: "Stella",
  rating: 4.9,
  reviewCount: 136,
  foundedYear: 2018,
  coordinates: { lat: 59.8321, lng: 17.6344 },
  hours: {
    note: "Behandlingarna sker i hemmamiljö i Rosendal — ring \"Uppfeldt Stella\" på porttelefonen för att bli insläppt.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4,9 på Bokadirekt", icon: "star" },
    { label: "136+ verifierade omdömen", icon: "reviews" },
    { label: "Certifierad fransstylist", icon: "location" },
    { label: "Hemstudio i Rosendal", icon: "student" },
  ],
  usps: [
    {
      title: "Certifierad fransstylist",
      description: "Stella är utbildad inom volym- och singelfransar med fokus på hållbarhet och naturligt resultat.",
    },
    {
      title: "Personlig konsultation",
      description: "Varje set designas efter din ögonform, önskemål och vardagsrutin.",
    },
    {
      title: "Hemstudio med lugn atmosfär",
      description: "Privat miljö i Rosendal — ring \"Uppfeldt Stella\" på porttelefonen vid ankomst.",
    },
    {
      title: "Lashlift & browlift",
      description: "Utöver fransförlängning erbjuds lashlift och browlift för ett fräscht look utan fransar.",
    },
  ],
  services: [
    {
      id: "fransforlangning-volym",
      name: "Fransförlängning volym",
      icon: "✨",
      description: "Fransar för dig som vill ha ett naturligt resultat — skräddarsytt efter dina önskemål.",
      duration: "30–90 min",
      priceFrom: 800,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "singelfransar",
      name: "Singelfransar",
      icon: "👁️",
      description: "För dig som vill ha ett naturligt resultat med en mascara-effekt.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "lashlift",
      name: "Lashlift",
      icon: "💫",
      description: "Permanent lyfter fransarna och ger en naturlig, fräsch look.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "browlift",
      name: "Browlift",
      icon: "🌸",
      description: "Permanent lyfter ögonbrynen och gör de lättare att forma efter önskan.",
      duration: "30–90 min",
      priceFrom: 800,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "quickfix-pafyllning",
      name: "Quickfix påfyllning",
      icon: "⚡",
      description: "Quickfix påfyllning inom 1–2 veckor efter din förra behandling.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Volymfransar", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Studio", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Singelfransar", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Resultat", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Lashlift", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Gullig tjej och jätte nöjd med fransarna❤️",
      author: "Sandra Å.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/stellas-fransar-uppsala-131342",
      rating: 5,
      date: "2026-06-16",
    },
    {
      text: "Jätte trevlig! Gör fett fina fransar",
      author: "Petra T.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/stellas-fransar-uppsala-131342",
      rating: 5,
      date: "2026-06-15",
    },
    {
      text: "Lika nöjd som alltid!",
      author: "Linn S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/stellas-fransar-uppsala-131342",
      rating: 5,
      date: "2026-06-05",
    },
    {
      text: "Alltid nöjd! Kvalitén, bemötandet, looken! 10/10 bästa franstjejen jag haft",
      author: "Johanna f.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/stellas-fransar-uppsala-131342",
      rating: 5,
      date: "2026-04-20",
    },
  ],
  about: {
    headline: "Fransar med personlig touch i Rosendal",
    paragraphs: [
      "Hej kära kunder! Här i Uppsala sker behandlingarna i hemmamiljö, belägen i ett lägenhetshus i Rosendal. För att bli insläppt ringer du \"Uppfeldt Stella\" på porttelefonen.",
      "Stella skapar skräddarsydda behandlingar för fransar och bryn — volymfransar, singelfransar, lashlift och browlift. Vänligen läs igenom villkoren noga innan bokning för bästa möjliga resultat.",
      "Ser fram emot att träffa er! Följ @Stellasfransar på Instagram för inspiration.",
    ],
  },
  faq: [
    {
      question: "Var ligger Stellas fransar?",
      answer: "Vi finns på Torgny Segerstedts Allé 21, 756 44 Uppsala (Rosendal). Ring \"Uppfeldt Stella\" på porttelefonen vid ankomst.",
    },
    {
      question: "Hur bokar jag tid hos Stellas fransar?",
      answer: "Boka via Bokadirekt på vår profilsida.",
    },
    {
      question: "Vad säger andra kunder om Stellas fransar?",
      answer: "Vi har 4,9 i snittbetyg baserat på 136+ recensioner på Bokadirekt.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Se aktuella tider på Bokadirekt. Vi rekommenderar att boka tid i förväg.",
    },
    {
      question: "Kan jag avboka eller omboka min tid?",
      answer: "Avbokning sker senast 24 timmar innan bokad tid via Bokadirekt. Sen avbokning och no-show debiteras fullpris.",
    },
    {
      question: "Hur länge håller volymfransar?",
      answer: "Volymfransar håller normalt 3–4 veckor beroende på din naturliga franscykel. Påfyllning rekommenderas inom tre veckor.",
    },
    {
      question: "Vad är skillnaden mellan lashlift och fransförlängning?",
      answer: "Lashlift böjer och färgar dina naturliga fransar utan förlängning. Fransförlängning adderar syntetiska fransar för mer volym och längd.",
    },
  ],
  seoKeywords: [
    "fransförlängning Rosendal",
    "fransstylist Uppsala",
    "lashlift Uppsala",
    "volymfransar Uppsala",
    "fransstudio Rosendal",
    "Stellas fransar Uppsala",
    "fransförlängning Uppsala",
    "certifierad fransstylist",
  ],
  brandColors: {
    primary: "#6B3A5C",
    secondary: "#D4A574",
    accent: "#FFF5F7",
    dark: "#3D1F35",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
