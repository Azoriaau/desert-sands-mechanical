export const site = {
  name: "Desert Sands Mechanical",
  legalName: "Desert Sands Mechanical Pty Ltd",
  short: "DSM",
  tagline: "4WD Tuning · Diesel Performance",
  description:
    "Custom dyno tuning, diesel 4WD servicing and performance upgrades in Geraldton, WA — backed by full heavy diesel capability across road transport, earthmoving, plant and equipment hire for the Midwest.",
  url: "https://www.desertsandsmechanical.com",
  abn: "82 632 154 093",
  phone: "0407 295 782",
  phoneIntl: "+61407295782",
  email: "office@desertsandsmechanical.com",
  areaServed: "Geraldton and the Midwest, Western Australia",
  address: {
    street: "76 Edward Road",
    suburb: "Utakarra",
    state: "WA",
    postcode: "6530",
    country: "AU",
  },
  geo: {
    // Feeds the LocalBusiness structured data alongside `address`.
    lat: -28.7897,
    lng: 114.6497,
  },
  hours: {
    weekday: "Monday – Friday, 8:00am – 5:00pm",
  },
  social: {
    facebook: "https://www.facebook.com/desertsandsmechanical/",
    instagram: "https://www.instagram.com/desertsandsmechanical/",
    tiktok: "https://www.tiktok.com/@desertsandsmechanical",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Tuning", href: "/tuning" },
  { label: "Diesel 4WDs", href: "/diesel-4wd" },
  { label: "Road Transport", href: "/road-transport" },
  { label: "Earthmoving & Plant", href: "/earthmoving-plant" },
  { label: "Equipment Hire", href: "/equipment-hire" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "tuning",
    title: "Tuning",
    tagline: "Torque where you need it. Power when you want it.",
    summary:
      "In-house dyno tuning for diesel 4x4s, rear-wheel-drive vehicles, trucks and plant. Every tune is validated by data, not guesswork.",
    highlights: [
      "4WD engine & transmission tunes",
      "Truck performance & economy tunes",
      "Earthmoving plant & equipment tuning",
      "Emissions control solutions (off-road / racing use only)",
    ],
  },
  {
    slug: "diesel-4wd",
    title: "Diesel 4WDs",
    tagline: "Built to work. Tuned to rip.",
    summary:
      "Servicing, diagnostics and performance upgrades for diesel 4WDs. From routine maintenance to full custom dyno tunes that wake your rig up.",
    highlights: [
      "Logbook & preventative servicing",
      "Fault diagnosis & driveability",
      "Performance upgrades & custom tunes",
      "Guaranteed, data-backed results",
    ],
  },
  {
    slug: "road-transport",
    title: "Road Transport",
    tagline: "Built for big rigs. Backed by big tools.",
    summary:
      "Precision servicing and repairs for light trucks, heavy prime movers and trailers across Japanese, European and American platforms.",
    highlights: [
      "Engine repairs & rebuilds",
      "Transmission & clutch replacements",
      "Air, hydraulic & electrical diagnostics",
      "OEM-grade tooling & scan tools",
    ],
  },
  {
    slug: "earthmoving-plant",
    title: "Earthmoving & Plant",
    tagline: "Built for the toughest jobs.",
    summary:
      "Fixed and mobile plant repairs that keep fleets running in the harshest, most remote sites. If it rolls, rips, crushes, stacks or grades, we've worked on it.",
    highlights: [
      "Mobile crushers, dozers, dump trucks & generators",
      "Hydraulic, electrical, mechanical & boilermaking",
      "Hi-rail gear & Groeneveld grease systems",
      "Workshop rated for heavy lifts",
    ],
  },
  {
    slug: "equipment-hire",
    title: "Equipment Hire",
    tagline: "Gear that turns up ready to work.",
    summary:
      "A well-maintained range of mine-spec and civil hire equipment, ready when your job is.",
    highlights: [
      "Positracks, excavators & loaders",
      "Compaction: rammers & plate compactors",
      "Generators, pressure washers & laser levels",
      "Service truck & Starlink connectivity",
    ],
  },
];

export const hireItems = [
  "FM500 Service Truck",
  "Caterpillar 259D3 Positrack",
  "Caterpillar 301.7 Excavator",
  "Bobcat Loader",
  "TopCon RLH5A Laser Level",
  "Wacker Neuson BS60-4 Rammer",
  "Wacker Neuson Plate Compactor",
  "Honda 3kVA Generator",
  "Pressure Washer Trailer (Mine-spec)",
  "Garpen 3600psi Pressure Washer",
  "Starlink Antenna w/ Internet",
];

export type Testimonial = {
  quote: string;
  author: string;
  detail?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Took me Hilux in (GUN126) for a tune and mate, she absolutely rips now. Went from 177hp to 215hp and torque's up from 450 to 530nm. Top bloke, straight shooter, couldn't be happier.",
    author: "Joshua Wallace",
    detail: "Greater Western Mechanical",
  },
  {
    quote:
      "Jesse at DSM helped us out and got us back on the road again when we needed it the most after we ended up in a floodway and waterlocked the engine on our way through town on a weekend. Legendary service and a very nice guy. Highly recommended.",
    author: "Hans Randklev",
    detail: "Google review",
  },
  {
    quote:
      "Big thank you to Jesse! Being stuck at the service station for 5 hours in 45 degree heat & exhausting all avenues we were recommended to call Jesse. He knew straightaway what the issue was & we were back on the road within an hour. Can't thank him enough!",
    author: "Regan James",
    detail: "Google review",
  },
  {
    quote:
      "Big thank you to Jesse for helping me back in January when my Mazda BT-50 broke down. He went above and beyond to look for the part, great service and good price considering the effort! Definitely recommend.",
    author: "Sophie Spencer",
    detail: "Google review",
  },
  {
    quote:
      "I cannot praise DSM highly enough. I put AdBlue in my campervan thinking it was diesel. It was midday on a Saturday. I contacted DSM (had been given their card) and Jesse offered to open his workshop. He worked painstakingly on the van for 4 hours and got it back on the road. Great expertise and kindness — a remarkable combination. Thanks Jesse.",
    author: "Marianne Batenburg",
    detail: "Google review",
  },
];

export const stats = [
  { value: "15+", label: "Years trade experience" },
  { value: "In-house", label: "Dyno tuning" },
  { value: "Mobile", label: "Field service" },
  { value: "Licensed", label: "WA repairer" },
];
