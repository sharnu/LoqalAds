// Central source of truth for brand, contact, and navigation.
// Nothing brand-related should be hard-coded twice across the site.

export const site = {
  name: 'LoqalAds',
  legalName: 'LoqalAds Media Private Limited',
  shortName: 'LoqalAds',
  location: 'Pune, India',
  domain: 'www.loqalads.in',
  url: 'https://www.loqalads.in',
  tagline: 'Software products & services, built in Pune.',
  supportingLine: 'Products our customers rely on — and services that ship.',
  description:
    'LoqalAds Media Private Limited is a Pune-based software company. We build our own products — like VillaDesk, our guest CRM for villa and homestay owners — and deliver custom software, web, cloud, and AI services for clients end-to-end.',
  email: 'admin@loqalads.in',
  phone: '+91 99213 89393',
  phoneRaw: '+919921389393',
  whatsapp: 'https://wa.me/919921389393',
} as const;

// Products built and owned by LoqalAds.
export const products = [
  {
    name: 'VillaDesk',
    tagline: 'Run your villa like a hotel chain.',
    summary:
      'A WhatsApp-assisted guest CRM built for independent villa and homestay owners in India — capture every enquiry, automate messaging, and stop revenue leaks.',
    href: '/products/villadesk',
    external: 'https://www.villadesk.in',
  },
] as const;

// The spectrum — used as decorative per-item accents across the site.
// Each value works both as a foreground colour and, at low opacity, as a soft
// chip tint.
export const spectrum = [
  '#7C3AED', // violet
  '#2563EB', // blue
  '#0891B2', // cyan
  '#059669', // emerald
  '#D97706', // amber
  '#EA580C', // orange
  '#DB2777', // pink
] as const;

export const nav = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
